import tabula
import pandas as pd
from pathlib import Path

raw_data_dir = Path(r"d:\2025\Personal\NeerNirikshan\RawData_NeerNirikshan\RawData")
pdf_path = raw_data_dir / "final_nhs-wq_pre_2019_compressed.pdf"

def inspect_pdf_structure(file_path):
    print(f"--- Structural Inspection: {file_path.name} ---")
    
    # Check first 5 pages to see table continuity and state repetition
    pages_to_check = "1-5"
    
    for mode in ["lattice", "stream"]:
        print(f"\n[TEST] {mode.capitalize()} Mode (Pages {pages_to_check}):")
        try:
            is_lattice = (mode == "lattice")
            tables = tabula.read_pdf(str(file_path), pages=pages_to_check, lattice=is_lattice, stream=not is_lattice, multiple_tables=True)
            
            if not tables:
                print(f"No tables found in {mode} mode.")
                continue

            for i, df in enumerate(tables):
                print(f"\n--- Page {i+1} Table Sample ---")
                print(f"Columns found ({len(df.columns)}): {df.columns.tolist()}")
                print("First 5 rows of data:")
                print(df.head(5).to_string())
                
                # Answer specific user questions:
                # 1. Multi-line headers?
                # Check if first row looks like a continuation of headers (contains chemical symbols like pH, CO3, etc)
                first_row = df.iloc[0].astype(str).tolist()
                print(f"First row content: {first_row}")
                
                # 2. "State" occurrence
                state_cols = [c for c in df.columns if 'State' in str(c)]
                if state_cols:
                    state_val_counts = df[state_cols[0]].value_counts()
                    print(f"State column value distribution (first 10): {state_val_counts.head(10).to_dict()}")
                
        except Exception as e:
            print(f"{mode.capitalize()} mode failed: {e}")

if __name__ == "__main__":
    if pdf_path.exists():
        inspect_pdf_structure(pdf_path)
    else:
        print("PDF file not found.")
