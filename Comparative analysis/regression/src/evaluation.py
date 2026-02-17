import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import os

def evaluate_model(model, X_test, y_test):
    """
    Evaluates the model on the test set.
    
    Args:
        model: Trained estimator/pipeline.
        X_test: Test features.
        y_test: Test labels.
        
    Returns:
        dict: Dictionary of metrics.
    """
    y_pred = model.predict(X_test)
    
    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    
    return {
        'Test_R2': r2,
        'Test_MAE': mae,
        'Test_RMSE': rmse
    }, y_pred

def plot_actual_vs_predicted(y_test, y_pred, model_name, save_dir):
    """
    Generates and saves a scatter plot of Actual vs Predicted values.
    """
    plt.figure(figsize=(8, 6))
    plt.scatter(y_test, y_pred, alpha=0.7, edgecolors='k')
    
    # Perfect prediction line
    min_val = min(y_test.min(), y_pred.min())
    max_val = max(y_test.max(), y_pred.max())
    plt.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2)
    
    plt.xlabel('Actual WQI')
    plt.ylabel('Predicted WQI')
    plt.title(f'Actual vs Predicted - {model_name}')
    plt.tight_layout()
    
    filename = f"{model_name.replace(' ', '_')}_actual_vs_pred.png"
    plt.savefig(os.path.join(save_dir, filename))
    plt.close()

def plot_residuals(y_test, y_pred, model_name, save_dir):
    """
    Generates and saves a histogram of residuals.
    """
    residuals = y_test - y_pred
    
    plt.figure(figsize=(8, 5))
    sns.histplot(residuals, kde=True, bins=25)
    plt.axvline(x=0, color='r', linestyle='--')
    
    plt.xlabel('Residuals')
    plt.title(f'Residual Analysis - {model_name}')
    plt.tight_layout()
    
    filename = f"{model_name.replace(' ', '_')}_residuals.png"
    plt.savefig(os.path.join(save_dir, filename))
    plt.close()
