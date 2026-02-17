import tabula
import pandas as pd
import os
import re
from pathlib import Path

base_dir = Path(__file__).resolve().parents[1]
raw_folder = base_dir / "RawData"
processed_folder = base_dir / "ProcessedData"
processed_folder.mkdir(parents=True, exist_ok=True)

pdf_files = [
    "final_nhs-wq_pre_2019_compressed.pdf",
    "final_nhs-wq_pre_2020_compressed.pdf",
    "final_nhs-wq_pre_2021_compressed.pdf",
    "final_nhs-wq_pre_2022_compressed.pdf",
    "final_nhs-wq_pre_2023_compressed.pdf"
]

all_data = []

for pdf in pdf_files:
    file_path = raw_folder / pdf
    print(f"\nProcessing: {pdf}")

    tables = tabula.read_pdf(str(file_path), pages='all', multiple_tables=True, lattice=True)

    year = re.search(r'\d{4}', pdf).group()

    for table in tables:
        if table is None or table.empty:
            continue

        # Drop completely empty columns
        table = table.dropna(axis=1, how='all')

        # Remove repeated header rows
        table = table[table.iloc[:,0] != "Well_ID"]
        table = table[table.iloc[:,1] != "S. No."]

        table["Year"] = year
        all_data.append(table)

# Combine all years
final_df = pd.concat(all_data, ignore_index=True)

# Save combined file
output_path = processed_folder / "CGWB_2019_2023_RAW_COMBINED.csv"
final_df.to_csv(output_path, index=False)

print("\nAll files combined successfully!")
