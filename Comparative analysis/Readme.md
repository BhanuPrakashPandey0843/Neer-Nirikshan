# Comparative Analysis
groundwater_ml_comparison/
│
├── .gitignore        👈 place it here
│
├── data/
│   └── groundwater_cleaned_imputed.csv
│
├── notebooks/
│   ├── .venv
│   ├── 01_random_forest.ipynb
│   ├── 02_xgboost.ipynb
│   ├── 03_svm.ipynb
│   ├── 04_ann.ipynb
│   ├── 05_logistic_regression.ipynb
│   └── 06_results_comparison.ipynb
│
├── results/
│   └── metrics_summary.csv
│
└── Readme.md



# Create venv
python -m venv .venv

# Activate
# Windows:
.\.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Install core packages
pip install numpy pandas scikit-learn matplotlib seaborn jupyter
pip install xgboost
pip install tensorflow keras torch torchvision torchaudio  
pip install joblib
