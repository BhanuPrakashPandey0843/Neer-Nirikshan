# ==========================================================
# Research-Grade Support Vector Regression (SVR)
# for Groundwater WQI Prediction
# ==========================================================
# Author: [Your Name]
# Project: Performance Comparison of ML Models for Groundwater Quality Assessment
# ==========================================================

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
from statsmodels.stats.outliers_influence import variance_inflation_factor

import warnings
warnings.filterwarnings("ignore")

# ==========================================================
# 1️⃣ Load & Inspect Data
# ==========================================================
df = pd.read_csv("Results_MADE.csv")

print("\n--- DATA OVERVIEW ---")
print(df.head())
print("\nShape of dataset:", df.shape)
print("\nMissing values per column:\n", df.isnull().sum())

# ==========================================================
# 2️⃣ Data Cleaning & Preprocessing
# ==========================================================

# Fill missing numeric values with median
df = df.fillna(df.median(numeric_only=True))

# Rename columns for consistency
df.columns = [
    "Temperature", "Dissolved_Oxygen", "pH", "BOD",
    "Faecal_Streptococci", "Nitrate", "Faecal_Coliform",
    "Total_Coliform", "Conductivity", "WQI"
]

# Log transform skewed features to reduce variance
skewed_cols = ["BOD", "Faecal_Streptococci", "Faecal_Coliform", "Total_Coliform", "Conductivity"]
for col in skewed_cols:
    df[col] = np.log1p(df[col].clip(lower=0))

# ==========================================================
# 3️⃣ Feature Selection and VIF Check
# ==========================================================
X = df.drop(columns=["WQI"], errors="ignore")
y = df["WQI"]

# Calculate Variance Inflation Factor (VIF)
X_numeric = X.select_dtypes(include=[np.number])
vif_data = pd.DataFrame()
vif_data["Feature"] = X_numeric.columns
vif_data["VIF"] = [variance_inflation_factor(X_numeric.values, i)
                   for i in range(len(X_numeric.columns))]
print("\n--- Variance Inflation Factor (VIF) ---")
print(vif_data)

# Remove features with high multicollinearity (VIF > 10)
high_vif_features = vif_data[vif_data["VIF"] > 10]["Feature"].tolist()
if high_vif_features:
    print(f"\n⚠️ Removing multicollinear features: {high_vif_features}")
    X = X.drop(columns=high_vif_features, errors="ignore")

# ==========================================================
# 4️⃣ Standardization (Essential for SVR)
# ==========================================================
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ==========================================================
# 5️⃣ Train-Test Split
# ==========================================================
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)
print(f"\nTrain set: {X_train.shape}, Test set: {X_test.shape}")

# ==========================================================
# 6️⃣ Model Definition
# ==========================================================
model = SVR(
    kernel='rbf',       # RBF kernel works best for nonlinear relationships
    C=100,              # regularization parameter
    epsilon=0.1,        # margin of tolerance
    gamma='scale'       # automatic gamma
)

# ==========================================================
# 7️⃣ Model Training
# ==========================================================
print("\nTraining SVR model...")
model.fit(X_train, y_train)
print("Training complete!")

# ==========================================================
# 8️⃣ Cross-Validation (10-Fold)
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
# 9️⃣ Evaluate on Test Data
# ==========================================================
y_pred = model.predict(X_test)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n===========================")
print("Support Vector Regression (Research-Optimized)")
print("===========================")
print(f"Test R² Score: {r2:.4f}")
print(f"Test MAE: {mae:.4f}")
print(f"Test RMSE: {rmse:.4f}")

# ==========================================================
# 🔟 Visualizations
# ==========================================================
# Actual vs Predicted
plt.figure(figsize=(8,6))
plt.scatter(y_test, y_pred, color='darkorange', edgecolor='k', alpha=0.7)
plt.plot([y.min(), y.max()], [y.min(), y.max()], color='blue', linewidth=2)
plt.title("Actual vs Predicted WQI (SVR)")
plt.xlabel("Actual WQI")
plt.ylabel("Predicted WQI")
plt.tight_layout()
plt.show()

# Residual Distribution
residuals = y_test - y_pred
plt.figure(figsize=(8,5))
sns.histplot(residuals, kde=True, color='green', bins=25)
plt.title("Residual Distribution (SVR)")
plt.xlabel("Residuals")
plt.tight_layout()
plt.show()

# ==========================================================
# 1️⃣1️⃣ Save Results
# ==========================================================
results = {
    "Model": "Support Vector Regression (RBF Kernel)",
    "CV_R2_Mean": cv_r2.mean(),
    "CV_R2_Std": cv_r2.std(),
    "CV_MAE_Mean": cv_mae.mean(),
    "CV_RMSE_Mean": cv_rmse.mean(),
    "Test_R2": r2,
    "Test_MAE": mae,
    "Test_RMSE": rmse
}

pd.DataFrame([results]).to_csv("results_svr_research.csv", index=False)
print("\nModel results saved to 'results_svr_research.csv'")
