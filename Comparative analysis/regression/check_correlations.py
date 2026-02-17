import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import os
from src.data_loader import get_clean_data

DATA_PATH = "Results_MADE.csv"
SAVE_DIR = "research_results"

def analyze_correlations():
    df = get_clean_data(DATA_PATH)
    
    # Calculate correlation matrix
    corr = df.corr()
    
    # Plot heatmap
    plt.figure(figsize=(10, 8))
    sns.heatmap(corr, annot=True, cmap='coolwarm', fmt=".2f")
    plt.title("Feature Correlation Matrix")
    plt.tight_layout()
    plt.savefig(os.path.join(SAVE_DIR, "correlation_matrix.png"))
    print("Correlation matrix saved.")
    
    # Print correlation with WQI
    print("\nCorrelation with WQI:")
    print(corr["WQI"].sort_values(ascending=False))

if __name__ == "__main__":
    analyze_correlations()
