import tabula
import pandas as pd
import os
import re
from pathlib import Path

# Base directories
base_dir = Path(__file__).resolve().parents[1]
raw_folder = base_dir / "RawData"
processed_folder = base_dir / "ProcessedData"
log_folder = base_dir / "Logs"

processed_folder.mkdir(parents=True, exist_ok=True)
log_folder.mkdir(parents=True, exist_ok=True)

pdf_files = [
    "final_nhs-wq_pre_2019_compressed.pdf",
    "final_nhs-wq_pre_2020_compressed.pdf",
    "final_nhs-wq_pre_2021_compressed.pdf",
    "final_nhs-wq_pre_2022_compressed.pdf",
    "final_nhs-wq_pre_2023_compressed.pdf"
]

# Expected schema (adjust after inspecting 1 clean table)
EXPECTED_COLUMNS = 20  # Update after verifying real count

def validate_numeric(series):
    return pd.to_numeric(series, errors='coerce')

all_years_cleaned = []

for pdf in pdf_files:
    file_path = raw_folder / pdf
    print(f"\nProcessing: {pdf}")
    
    year = re.search(r'\d{4}', pdf).group()
    yearly_data = []

    try:
        tables = tabula.read_pdf(
            str(file_path),
            pages="all",
            multiple_tables=True,
            lattice=True
        )
    except Exception as e:
        print(f"Extraction failed for {pdf}")
        continue

    for table in tables:
        if table is None or table.empty:
            continue

        # Remove completely empty columns
        table = table.dropna(axis=1, how='all')

        # Skip corrupted structure
        if table.shape[1] < 5:
            continue

        # Add Year column
        table["Year"] = year

        yearly_data.append(table)

    if not yearly_data:
        print(f"No valid tables found in {pdf}")
        continue

    year_df = pd.concat(yearly_data, ignore_index=True)

    # Save raw yearly extraction BEFORE cleaning
    raw_output = processed_folder / f"CGWB_{year}_RAW.csv"
    year_df.to_csv(raw_output, index=False)

    print(f"Saved RAW file for {year}")

    all_years_cleaned.append(year_df)

# Combine all raw years
if all_years_cleaned:
    combined_df = pd.concat(all_years_cleaned, ignore_index=True)
    combined_output = processed_folder / "CGWB_2019_2023_RAW_COMBINED.csv"
    combined_df.to_csv(combined_output, index=False)
    print("\nAll RAW files combined successfully.")
else:
    print("No data extracted.")
