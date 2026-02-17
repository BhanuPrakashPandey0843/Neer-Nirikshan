import pandas as pd
import numpy as np
import os

def load_data(filepath: str) -> pd.DataFrame:
    """
    Loads the dataset from the specified filepath.
    
    Args:
        filepath (str): Path to the CSV file.
        
    Returns:
        pd.DataFrame: Loaded and initialy cleaned dataframe.
    """
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"The dataset file was not found at: {filepath}")
        
    df = pd.read_csv(filepath)
    
    # Rename columns for consistency across the project
    df.columns = [
        "Temperature", "Dissolved_Oxygen", "pH", "BOD",
        "Faecal_Streptococci", "Nitrate", "Faecal_Coliform",
        "Total_Coliform", "Conductivity", "WQI"
    ]
    
    return df

def preprocess_skewed_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Applies log transformation to known skewed features using log1p.
    
    Args:
        df (pd.DataFrame): Input dataframe.
        
    Returns:
        pd.DataFrame: Dataframe with transformed skewed columns.
    """
    skewed_cols = ["BOD", "Faecal_Streptococci", "Faecal_Coliform", "Total_Coliform", "Conductivity"]
    
    # Create a copy to avoid SettingWithCopy warnings if a slice is passed
    df = df.copy()
    
    for col in skewed_cols:
        if col in df.columns:
            # clip(lower=0) ensures we don't pass negative values to log (though these feats usually aren't negative)
            df[col] = np.log1p(df[col].clip(lower=0))
            
    return df

def get_clean_data(filepath: str) -> pd.DataFrame:
    """
    Wrapper function to load and apply initial transformations.
    """
    df = load_data(filepath)
    df = preprocess_skewed_features(df)
    return df
