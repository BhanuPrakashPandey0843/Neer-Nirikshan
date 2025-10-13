# ==========================================================
# Research-Grade Linear Regression for Groundwater WQI Prediction
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
from sklearn.linear_model import LinearRegression
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

# Detect numeric columns
numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()

# Correlation with WQI
print("\n--- Correlation with WQI ---")
corr = df[numeric_cols].corr()["WQI"].sort_values(ascending=False)
print(corr)

# Automatically remove features highly correlated (>0.95) with WQI to prevent leakage
high_corr_features = corr[abs(corr) > 0.95].index.tolist()
high_corr_features = [f for f in high_corr_features if f != "WQI"]
if high_corr_features:
    print(f"\n⚠️ Removing highly correlated features with WQI: {high_corr_features}")
    df = df.drop(columns=high_corr_features)

# ==========================================================
# 3️⃣ Feature Selection: Multicollinearity Check (VIF)
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

# Remove features with VIF > 10 (high multicollinearity)
high_vif_features = vif_data[vif_data["VIF"] > 10]["Feature"].tolist()
if high_vif_features:
    print(f"\n⚠️ Removing multicollinear features: {high_vif_features}")
    X = X.drop(columns=high_vif_features, errors="ignore")

# ==========================================================
# 4️⃣ Data Standardization
# ==========================================================
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ==========================================================
# 5️⃣ Data Splitting
# ==========================================================
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

print(f"\nTrain set: {X_train.shape}, Test set: {X_test.shape}")

# ==========================================================
# 6️⃣ Model Training
# ==========================================================
model = LinearRegression()
model.fit(X_train, y_train)

# ==========================================================
# 7️⃣ Model Evaluation
# ==========================================================
y_pred = model.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n===========================")
print("Linear Regression Performance")
print("===========================")
print(f"R² Score: {r2:.4f}")
print(f"MAE: {mae:.4f}")
print(f"RMSE: {rmse:.4f}")

# ==========================================================
# 8️⃣ Cross-Validation (for research reliability)
# ==========================================================
kfold = KFold(n_splits=10, shuffle=True, random_state=42)
cv_scores = cross_val_score(model, X_scaled, y, cv=kfold, scoring="r2")
print("\nCross-Validation R² Scores:", np.round(cv_scores, 4))
print("Mean CV R²:", round(cv_scores.mean(), 4))

# ==========================================================
# 9️⃣ Feature Coefficients
# ==========================================================
coef_df = pd.DataFrame({
    "Feature": X.columns,
    "Coefficient": model.coef_
}).sort_values(by="Coefficient", ascending=False)
print("\n--- Feature Coefficients ---")
print(coef_df)

# ==========================================================
# 🔟 Diagnostic Visualizations
# ==========================================================
# Actual vs Predicted
plt.figure(figsize=(7,5))
sns.scatterplot(x=y_test, y=y_pred, color="blue", alpha=0.7, edgecolor="k")
plt.plot([y.min(), y.max()], [y.min(), y.max()], "r--", linewidth=2)
plt.xlabel("Actual WQI")
plt.ylabel("Predicted WQI")
plt.title("Actual vs Predicted WQI (Linear Regression)")
plt.tight_layout()
plt.show()

# Residuals
residuals = y_test - y_pred
plt.figure(figsize=(7,4))
sns.histplot(residuals, kde=True, color="orange")
plt.title("Residual Distribution (Linear Regression)")
plt.xlabel("Residuals")
plt.tight_layout()
plt.show()

# ==========================================================
# 1️⃣1️⃣ Save Results
# ==========================================================
results = {
    "Model": "Linear Regression",
    "R2_Score": round(r2, 4),
    "MAE": round(mae, 4),
    "RMSE": round(rmse, 4),
    "CV_R2_Mean": round(cv_scores.mean(), 4)
}
pd.DataFrame([results]).to_csv("research_results_linear_regression.csv", index=False)
coef_df.to_csv("feature_coefficients_linear_regression.csv", index=False)

print("\n✅ Research results saved to:")
print("   → research_results_linear_regression.csv")
print("   → feature_coefficients_linear_regression.csv")
