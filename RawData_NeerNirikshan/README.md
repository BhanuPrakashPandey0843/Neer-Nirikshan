# RawData_NeerNirikshan

This folder contains scripts to extract tabular water-quality data from CGWB PDF reports and combine them into CSV files.

## What’s Here
- RawData: Input PDFs (final_nhs-wq_pre_2019–2023_compressed.pdf)
- Scripts: Main extractor [extract_and_combine.py](file:///d:/2025/Personal/NeerNirikshan/RawData_NeerNirikshan/Scripts/extract_and_combine.py) and helper [inspect_pdf.py](file:///d:/2025/Personal/NeerNirikshan/RawData_NeerNirikshan/inspect_pdf.py)
- ProcessedData: Auto-created output CSVs
- Logs: Auto-created log files (if any)

## Prerequisites
- Windows with PowerShell
- Python 3.9+ installed and in PATH (check: `python --version`)
- Java 8+ Runtime installed and in PATH (required by tabula-py; check: `java -version`)
  - Download JRE from Adoptium or Oracle, then ensure `java` is available in PATH.

## Set Up a Virtual Environment (venv)
1. Open PowerShell in this folder:
   - File Explorer → Right-click inside RawData_NeerNirikshan → “Open in Terminal”
2. Create the virtual environment:
   ```powershell
   python -m venv .venv
   ```
3. Activate it:
   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```
   - Deactivate anytime:
   ```powershell
   deactivate
   ```
4. Upgrade pip and install dependencies:
   ```powershell
   python -m pip install --upgrade pip
   pip install tabula-py pandas
   ```

## How to Run the Extractor
1. Ensure the PDFs are present under RawData (already included).
2. Run the main script:
   ```powershell
   python .\Scripts\extract_and_combine.py
   ```
3. Outputs:
   - Per-year CSVs: `ProcessedData\CGWB_{YEAR}_RAW.csv`
   - Combined CSV: `ProcessedData\CGWB_2019_2023_RAW_COMBINED.csv`

## Inspect a PDF (optional)
Use this to quickly check how tables are detected on a few pages:
```powershell
python .\inspect_pdf.py
```

## Common Issues
- “java not found” or Tabula errors:
  - Install Java JRE and ensure `java -version` works in a new terminal.
- PowerShell execution policy blocks activation:
  - Use a temporary bypass in the current shell:
  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```
- No tables detected:
  - `inspect_pdf.py` tries both lattice/stream modes. If extraction fails, verify the PDF files and Java install.

## Using Conda (alternative)
If you prefer Conda:
```powershell
conda create -n neer python=3.10 -y
conda activate neer
pip install tabula-py pandas
```

## Project Tips
- Always activate the venv before running scripts.
- Keep RawData filenames unchanged; the extractor expects specific year patterns.
