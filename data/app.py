import pandas as pd
import numpy as np

# === 1. Load Dataset ===
df = pd.read_excel("data.xlsx")

# === 2. Clean Data ===
# Replace "-" with NaN
df = df.replace("-", np.nan)

# Drop duplicate rows if any
df = df.drop_duplicates()

# Print dataset shape
print(f"Dataset Shape: {df.shape[0]} rows × {df.shape[1]} columns")

# === 3. Convert Numeric Columns ===
for col in df.columns:
    # Try converting each column to numeric if possible
    df[col] = pd.to_numeric(df[col], errors='ignore')

# === 4. Missing Value Analysis ===
missing_info = df.isna().sum().to_frame(name='MissingCount')
missing_info['MissingPercent'] = (missing_info['MissingCount'] / len(df)) * 100
missing_info = missing_info.sort_values(by='MissingPercent', ascending=False)

# Identify features to drop, impute, or keep
drop_features = missing_info[missing_info['MissingPercent'] > 60].index.tolist()
impute_features = missing_info[(missing_info['MissingPercent'] <= 60) & 
                               (missing_info['MissingPercent'] > 0)].index.tolist()
complete_features = missing_info[missing_info['MissingPercent'] == 0].index.tolist()

print("\n=== Missing Value Report ===")
print(missing_info)

print("\nDrop these features (>60% missing):")
print(drop_features)

print("\nImpute these features (<=60% missing):")
print(impute_features)

print("\nNo missing values:")
print(complete_features)

# === 5. Save Cleaned Dataset (Optional) ===
df.to_csv("groundwater_cleaned.csv", index=False)
print("\nCleaned dataset saved as groundwater_cleaned.csv")
