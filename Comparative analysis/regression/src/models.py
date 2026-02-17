from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression
from lightgbm import LGBMRegressor

def get_model(model_name: str):
    """
    Factory function to return a configured model instance.
    
    Args:
        model_name (str): Name of the model.
        
    Returns:
        Estimator: Scikit-learn compatible estimator.
    """
    
    if model_name == "RandomForest":
        return RandomForestRegressor(
            n_estimators=200,
            max_depth=10,
            random_state=42,
            n_jobs=-1,
            min_samples_split=3,
            min_samples_leaf=2
        )
        
    elif model_name == "SVR":
        return SVR(
            kernel='rbf',
            C=100,
            epsilon=0.1,
            gamma='scale'
        )
        
    elif model_name == "GradientBoosting":
        return GradientBoostingRegressor(
            n_estimators=300,
            learning_rate=0.05,
            max_depth=5,
            min_samples_split=2,
            min_samples_leaf=2,
            subsample=0.9,
            max_features='sqrt',
            random_state=42
        )
        
    elif model_name == "LightGBM":
        return LGBMRegressor(
            boosting_type='gbdt',
            num_leaves=31,
            max_depth=-1,
            learning_rate=0.05,
            n_estimators=300,
            subsample=0.9,
            colsample_bytree=0.8,
            reg_alpha=0.1,
            reg_lambda=0.2,
            random_state=42,
            n_jobs=-1,
            verbosity=-1  # Suppress warnings
        )
        
    elif model_name == "LinearRegression":
        return LinearRegression()
        
    else:
        raise ValueError(f"Model {model_name} not implemented.")
