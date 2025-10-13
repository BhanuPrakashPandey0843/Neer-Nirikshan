# ==========================
# Random Forest Regression for WQI Prediction (Research-Optimized)
# ==========================

# Step 1: Import Libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# Step 2: Load Dataset
df = pd.read_csv("Results_MADE.csv")

# Rename columns for consistency
df.columns = [
    "Temperature", "Dissolved_Oxygen", "pH", "BOD",
    "Faecal_Streptococci", "Nitrate", "Faecal_Coliform",
    "Total_Coliform", "Conductivity", "WQI"
]

# Step 3: Dataset Overview
print("\n--- Dataset Info ---")
print(df.info())

print("\n--- Missing Values ---")
print(df.isnull().sum())

# Fill missing values with mean (safe for numeric data)
df = df.fillna(df.mean(numeric_only=True))

print(f"\nDataset shape after cleaning: {df.shape}")

# Step 4: Log Transformation for Skewed Features
# Only apply to positive-valued skewed columns
skewed_cols = ["BOD", "Faecal_Streptococci", "Faecal_Coliform", "Total_Coliform", "Conductivity"]
for col in skewed_cols:
    # Avoid log(0)
    df[col] = np.log1p(df[col].clip(lower=0))

# Step 5: Prepare Data
X = df.drop("WQI", axis=1)
y = df["WQI"]

# Step 6: Split Data (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"Training shape: {X_train.shape}, Testing shape: {X_test.shape}")

# Step 7: Define and Train Random Forest Model
model = RandomForestRegressor(
    n_estimators=200,      # increased for research accuracy
    max_depth=10,          # balanced tree depth
    random_state=42,
    n_jobs=-1,
    min_samples_split=3,
    min_samples_leaf=2
)

print("\nTraining Random Forest model...")
model.fit(X_train, y_train)
print("Training complete!")

# Step 8: Cross-Validation (10-Fold)
kf = KFold(n_splits=10, shuffle=True, random_state=42)
cv_r2 = cross_val_score(model, X, y, cv=kf, scoring="r2")
cv_mae = -cross_val_score(model, X, y, cv=kf, scoring="neg_mean_absolute_error")
cv_rmse = np.sqrt(-cross_val_score(model, X, y, cv=kf, scoring="neg_mean_squared_error"))

print("\n--- 10-Fold Cross-Validation ---")
print(f"CV Mean R²: {cv_r2.mean():.4f} ± {cv_r2.std():.4f}")
print(f"CV Mean MAE: {cv_mae.mean():.4f} ± {cv_mae.std():.4f}")
print(f"CV Mean RMSE: {cv_rmse.mean():.4f} ± {cv_rmse.std():.4f}")

# Step 9: Test Predictions
y_pred = model.predict(X_test)

# Step 10: Evaluate on Test Data
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n===========================")
print("Random Forest Regression (Research-Optimized)")
print("===========================")
print(f"Test R² Score: {r2:.4f}")
print(f"Test MAE: {mae:.4f}")
print(f"Test RMSE: {rmse:.4f}")

# Step 11: Plot Actual vs Predicted
plt.figure(figsize=(8,6))
plt.scatter(y_test, y_pred, color='royalblue', edgecolor='k', alpha=0.7)
plt.plot([y.min(), y.max()], [y.min(), y.max()], color='red', linewidth=2)
plt.title("Actual vs Predicted WQI (Random Forest)")
plt.xlabel("Actual WQI")
plt.ylabel("Predicted WQI")
plt.tight_layout()
plt.show()

# Step 12: Residual Distribution
residuals = y_test - y_pred
plt.figure(figsize=(8,5))
sns.histplot(residuals, kde=True, color='purple', bins=25)
plt.title("Residual Distribution (Random Forest)")
plt.xlabel("Residuals")
plt.tight_layout()
plt.show()

# Step 13: Feature Importance
plt.figure(figsize=(8,5))
importance = model.feature_importances_
sorted_idx = np.argsort(importance)
plt.barh(np.array(X.columns)[sorted_idx], importance[sorted_idx], color='teal')
plt.title("Feature Importance (Random Forest)")
plt.xlabel("Importance Score")
plt.tight_layout()
plt.show()

# Step 14: Save Results
results = {
    "Model": "Random Forest Regression (Research-Optimized)",
    "CV_R2_Mean": cv_r2.mean(),
    "CV_R2_Std": cv_r2.std(),
    "CV_MAE_Mean": cv_mae.mean(),
    "CV_RMSE_Mean": cv_rmse.mean(),
    "Test_R2": r2,
    "Test_MAE": mae,
    "Test_RMSE": rmse
}

results_df = pd.DataFrame([results])
results_df.to_csv("results_random_forest_research.csv", index=False)
print("\nModel results saved to 'results_random_forest_research.csv'")
