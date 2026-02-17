from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer

def get_preprocessor(numeric_features):
    """
    Creates a scikit-learn pipeline for data preprocessing.
    
    Strategy:
    1. Impute missing values with 'mean' (Consistent strategy).
    2. Scale features using StandardScaler.
    
    Args:
        numeric_features (list): List of column names to apply transformations to.
        
    Returns:
        ColumnTransformer: Configured preprocessor.
    """
    
    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='mean')),
        ('scaler', StandardScaler())
    ])
    
    # We apply this transformation to all numeric input features
    # (In this dataset, all features are numeric)
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features)
        ]
    )
    
    return preprocessor
