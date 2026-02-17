import numpy as np
import pandas as pd
from sklearn.model_selection import KFold, cross_validate, cross_val_predict

def train_evaluate_cv(model, X, y, cv_folds=10):
    """
    Performs K-Fold Cross Validation and returns aggregated metrics.
    
    Args:
        model: The scikit-learn compatible estimator/pipeline.
        X (pd.DataFrame): Training features.
        y (pd.Series): Target variable.
        cv_folds (int): Number of folds (default: 10).
        
    Returns:
        dict: Dictionary containing mean and std of metrics (R2, MAE, RMSE).
    """
    kf = KFold(n_splits=cv_folds, shuffle=True, random_state=42)
    
    scoring = {
        'r2': 'r2',
        'neg_mae': 'neg_mean_absolute_error',
        'neg_rmse': 'neg_root_mean_squared_error'
    }
    
    # We use cross_validate to get metrics for each fold
    scores = cross_validate(model, X, y, cv=kf, scoring=scoring, n_jobs=-1, return_train_score=False)
    
    results = {
        'CV_R2_Mean': scores['test_r2'].mean(),
        'CV_R2_Std': scores['test_r2'].std(),
        'CV_MAE_Mean': -scores['test_neg_mae'].mean(), # negate back to positive
        'CV_RMSE_Mean': -scores['test_neg_rmse'].mean() # negate back to positive
    }
    
    return results

def get_cv_predictions(model, X, y, cv_folds=10):
    """
    Returns Out-of-Fold predictions for the entire training set.
    Useful for visualizing specific CV performance or residuals over the whole dataset.
    """
    kf = KFold(n_splits=cv_folds, shuffle=True, random_state=42)
    preds = cross_val_predict(model, X, y, cv=kf, n_jobs=-1)
    return preds
