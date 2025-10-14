# ==========================================================
# Groundwater Quality Index (WQI) Prediction
# Using Gradient Boosting Regressor (Research-Optimized)
# 
# ==========================================================

# Step 1: Import Libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.filterwarnings("ignore")

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler

# ==========================================================
# Step 2: Load Dataset
# ==========================================================
df = pd.read_csv("Results_MADE.csv")

# Rename columns (if unnamed or inconsistent)
df.columns = [
    "Temperature", "Dissolved_Oxygen", "pH", "BOD",
    "Faecal_Streptococci", "Nitrate", "Faecal_Coliform",
    "Total_Coliform", "Conductivity", "WQI"
]

print("\n--- Dataset Info ---")
print(df.info())
print("\n--- Missing Values ---")
print(df.isnull().sum())

# Fill missing values with mean (numerical only)
df = df.fillna(df.mean(numeric_only=True))
print(f"\n✅ Dataset cleaned. Shape: {df.shape}")

# ==========================================================
# Step 3: Log Transform Skewed Features
# ==========================================================
skewed_cols = ["BOD", "Faecal_Streptococci", "Faecal_Coliform", "Total_Coliform", "Conductivity"]
for col in skewed_cols:
    df[col] = np.log1p(df[col].clip(lower=0))  # avoid log(0)

# ==========================================================
# Step 4: Prepare Data
# ==========================================================
X = df.drop("WQI", axis=1)
y = df["WQI"]

# Standardize for boosting stability
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ==========================================================
# Step 5: Train-Test Split (80/20)
# ==========================================================
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)
print(f"\nTraining shape: {X_train.shape}, Testing shape: {X_test.shape}")

# ==========================================================
# Step 6: Initialize Gradient Boosting Model
# ==========================================================
model = GradientBoostingRegressor(
    n_estimators=300,         # number of trees
    learning_rate=0.05,       # shrinkage rate
    max_depth=5,              # depth of each tree
    min_samples_split=2,
    min_samples_leaf=2,
    subsample=0.9,            # stochastic gradient boosting
    max_features='sqrt',
    random_state=42
)

# ==========================================================
# Step 7: Cross-Validation (10-Fold)
# ==========================================================
kf = KFold(n_splits=10, shuffle=True, random_state=42)
cv_r2 = cross_val_score(model, X_scaled, y, cv=kf, scoring="r2")
cv_mae = -cross_val_score(model, X_scaled, y, cv=kf, scoring="neg_mean_absolute_error")
cv_rmse = np.sqrt(-cross_val_score(model, X_scaled, y, cv=kf, scoring="neg_mean_squared_error"))

print("\n--- 10-Fold Cross-Validation ---")
print(f"CV Mean R²: {cv_r2.mean():.4f} ± {cv_r2.std():.4f}")
print(f"CV Mean MAE: {cv_mae.mean():.4f} ± {cv_mae.std():.4f}")
print(f"CV Mean RMSE: {cv_rmse.mean():.4f} ± {cv_rmse.std():.4f}")

# ==========================================================
# Step 8: Train Model
# ==========================================================
print("\nTraining Gradient Boosting Regressor...")
model.fit(X_train, y_train)
print("✅ Training Complete!")

# ==========================================================
# Step 9: Evaluate on Test Data
# ==========================================================
y_pred = model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n===========================")
print("Gradient Boosting Regression (Research-Optimized)")
print("===========================")
print(f"Test R² Score: {r2:.4f}")
print(f"Test MAE: {mae:.4f}")
print(f"Test RMSE: {rmse:.4f}")

# ==========================================================
# Step 10: Actual vs Predicted Plot
# ==========================================================
plt.figure(figsize=(8,6))
plt.scatter(y_test, y_pred, color='royalblue', edgecolor='k', alpha=0.7)
plt.plot([y.min(), y.max()], [y.min(), y.max()], color='red', linewidth=2)
plt.title("Actual vs Predicted WQI (Gradient Boosting)")
plt.xlabel("Actual WQI")
plt.ylabel("Predicted WQI")
plt.tight_layout()
plt.show()

# ==========================================================
# Step 11: Residual Distribution
# ==========================================================
residuals = y_test - y_pred
plt.figure(figsize=(8,5))
sns.histplot(residuals, kde=True, color='purple', bins=25)
plt.title("Residual Distribution (Gradient Boosting)")
plt.xlabel("Residuals")
plt.tight_layout()
plt.show()

# ==========================================================
# Step 12: Feature Importance
# ==========================================================
plt.figure(figsize=(8,5))
importance = model.feature_importances_
sorted_idx = np.argsort(importance)
plt.barh(np.array(X.columns)[sorted_idx], importance[sorted_idx], color='teal')
plt.title("Feature Importance (Gradient Boosting)")
plt.xlabel("Importance Score")
plt.tight_layout()
plt.show()

# ==========================================================
# Step 13: Save Results
# ==========================================================
results = {
    "Model": "Gradient Boosting Regression (Research-Optimized)",
    "CV_R2_Mean": cv_r2.mean(),
    "CV_R2_Std": cv_r2.std(),
    "CV_MAE_Mean": cv_mae.mean(),
    "CV_RMSE_Mean": cv_rmse.mean(),
    "Test_R2": r2,
    "Test_MAE": mae,
    "Test_RMSE": rmse
}

results_df = pd.DataFrame([results])
results_df.to_csv("results_gradient_boosting_research.csv", index=False)
print("\nModel results saved to 'results_gradient_boosting_research.csv'")
