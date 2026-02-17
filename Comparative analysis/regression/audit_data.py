import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# Setup
DATA_PATH = r"d:\2025\Personal\NeerNirikshan\Comparative analysis\regression\Results_MADE.csv"
df = pd.read_csv(DATA_PATH)

print(f"Dataset shape: {df.shape}")

# 1. Check for duplicates
duplicates = df.duplicated().sum()
print(f"Total duplicate rows: {duplicates}")

# 2. Check for constant features
constant_features = [col for col in df.columns if df[col].nunique() <= 1]
print(f"Constant features: {constant_features}")

# 3. Correlation with Target
corrs = df.corr()['WQI'].sort_values(ascending=False)
print("\nCorrelations with Target (WQI):")
print(corrs)

# 4. Leakage Check: Train-Test Contamination
X = df.drop("WQI", axis=1)
y = df["WQI"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Check if any row in X_test is in X_train
# Using a merge for exact match check
train_test_overlap = pd.merge(X_train, X_test, how='inner').shape[0]
print(f"\nExact row overlap between train and test: {train_test_overlap}")

# 5. Check for target leakage
# High correlation (>0.99) might indicate a feature that is a proxy for target
potential_leakers = corrs[abs(corrs) > 0.99].index.tolist()
if "WQI" in potential_leakers: potential_leakers.remove("WQI")
print(f"Potential target leakers (corr > 0.99): {potential_leakers}")
