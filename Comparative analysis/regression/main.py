import os
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline

from src.data_loader import get_clean_data
from src.preprocessing import get_preprocessor
from src.models import get_model
from src.training import train_evaluate_cv
from src.evaluation import evaluate_model, plot_actual_vs_predicted, plot_residuals

# Configuration
DATA_PATH = "Results_MADE.csv"
RESULTS_DIR = "research_results"
MODELS_TO_RUN = ["LinearRegression", "RandomForest", "SVR", "GradientBoosting", "LightGBM"]

def main():
    # 1. Setup Directories
    if not os.path.exists(RESULTS_DIR):
        os.makedirs(RESULTS_DIR)
        
    print("Step 1: Loading Data...")
    try:
        df = get_clean_data(DATA_PATH)
        print(f"Data loaded successfully. Shape: {df.shape}")
    except FileNotFoundError:
        print(f"Error: {DATA_PATH} not found. Please ensure the dataset is in the root directory.")
        return

    # 2. Split Data (Before any processing to prevent leakage)
    X = df.drop("WQI", axis=1)
    y = df["WQI"]
    
    # 80/20 Split as per research standard
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    print(f"Train Size: {X_train.shape[0]}, Test Size: {X_test.shape[0]}")
    
    final_results = []
    
    # 3. Iterate through models
    for model_name in MODELS_TO_RUN:
        print(f"\n--- Running Model: {model_name} ---")
        
        # a. Build Pipeline (Preprocessor + Model)
        # Note: Preprocessor is fitted ONLY on the training data passed to it
        preprocessor = get_preprocessor(numeric_features=X.columns)
        model = get_model(model_name)
        
        pipeline = Pipeline(steps=[
            ('preprocessor', preprocessor),
            ('regressor', model)
        ])
        
        # b. Cross-Validation on Training Set
        print("Performing 10-Fold Cross-Validation...")
        cv_metrics = train_evaluate_cv(pipeline, X_train, y_train, cv_folds=10)
        
        # c. Train on Full Training Set
        print("Training on full training set...")
        pipeline.fit(X_train, y_train)
        
        # d. Evaluate on Test Set
        print("Evaluating on Test Set...")
        test_metrics, y_pred = evaluate_model(pipeline, X_test, y_test)
        
        # e. Visualizations
        plot_actual_vs_predicted(y_test, y_pred, model_name, RESULTS_DIR)
        plot_residuals(y_test, y_pred, model_name, RESULTS_DIR)
        
        # f. Aggregate Results
        combined_metrics = {'Model': model_name, **cv_metrics, **test_metrics}
        final_results.append(combined_metrics)
        print(f"Completed {model_name}. Test R2: {test_metrics['Test_R2']:.4f}")

    # 4. Save Final Report
    results_df = pd.DataFrame(final_results)
    report_path = os.path.join(RESULTS_DIR, "Final_Comparative_Report.csv")
    results_df.to_csv(report_path, index=False)
    
    print(f"\nAll experiments completed. Results saved to {report_path}")
    print(results_df)

if __name__ == "__main__":
    main()
