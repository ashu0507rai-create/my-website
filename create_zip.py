import os
import shutil
import zipfile

def create_project_zip():
    output_filename = "nextjs-project-export.zip"
    exclude_dirs = {'.next', 'node_modules', '.git', '__pycache__', '.vercel'}
    exclude_files = {output_filename, '.DS_Store', 'package-lock.json'}

    print(f"Creating project archive: {output_filename}...")
    
    file_count = 0
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk('.'):
            # Exclude specified directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                if file in exclude_files or file.endswith('.pyc') or file.endswith('.zip'):
                    continue
                
                file_path = os.path.join(root, file)
                # Archive path relative to project root
                arcname = os.path.relpath(file_path, '.')
                zipf.write(file_path, arcname)
                file_count += 1
                
    file_size_mb = os.path.getsize(output_filename) / (1024 * 1024)
    print(f"Project ZIP created successfully! ({file_count} files, {file_size_mb:.2f} MB)")

    # Also sync to public directory for browser download links
    os.makedirs('public', exist_ok=True)
    shutil.copy(output_filename, os.path.join('public', output_filename))
    print(f"Copied {output_filename} to public/{output_filename} for web access.")

if __name__ == "__main__":
    create_project_zip()
