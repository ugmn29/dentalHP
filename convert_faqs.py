#!/usr/bin/env python3
"""
Script to convert FAQ sections from accordion format to expanded design
across all relevant page.tsx files in the dental website.
"""

import re
import os
from pathlib import Path

# Base directory
BASE_DIR = Path("/Users/fukunagashindai/Downloads/フク歯科HP/fuku-dental/app")

# Files to convert (from user's list, excluding already completed ones)
FILES_TO_CONVERT = [
    "periodontal/treatment-methods/page.tsx",
    "periodontal/stages/page.tsx",
    "general/root-canal/case-studies/page.tsx",
    "general/root-canal/duration/page.tsx",
    "general/root-canal/pain/page.tsx",
    "general/root-canal/cost/page.tsx",
    "general/root-canal/types/page.tsx",
    "orthodontics/case-studies/page.tsx",
    "orthodontics/adult/page.tsx",
    "orthodontics/duration/page.tsx",
    "orthodontics/cost/page.tsx",
    "orthodontics/types/page.tsx",
    "implant/case-studies/page.tsx",
    "implant/vs-denture/page.tsx",
    "implant/cost/page.tsx",
    "implant/types/page.tsx",
    "ceramic/case-studies/page.tsx",
    "ceramic/vs-metal/page.tsx",
    "ceramic/longevity/page.tsx",
    "ceramic/cost/page.tsx",
    "ceramic/types/page.tsx",
    "whitening/comparison/page.tsx",
    "whitening/safety/page.tsx",
    "whitening/duration/page.tsx",
    "whitening/cost/page.tsx",
    "whitening/page.tsx",
    "kidsortho/appliances/expander/page.tsx",
    "kidsortho/cost/page.tsx",
    "concerns/tmj/page.tsx",
    "concerns/bruxism/page.tsx",
    "concerns/trauma/page.tsx",
]

def find_faq_section(content):
    """Find the FAQ section in the file."""
    # Pattern to match the FAQ section starting with "よくある質問" and ending before next section
    pattern = r'(<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">\s*<h2 className="text-3xl font-bold text-gray-900 mb-8">よくある質問</h2>\s*<div className="space-y-4">.*?)</div>\s*</div>\s*\n\s*{/\* Related Pages \*/}'

    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(1) + "</div>\n              </div>"
    return None

def extract_faq_items(faq_section):
    """Extract individual FAQ items from the accordion format."""
    items = []
    # Pattern to match each <details> tag
    pattern = r'<details className="group bg-gray-50.*?>(.*?)</details>'

    matches = re.finditer(pattern, faq_section, re.DOTALL)

    for match in matches:
        detail_content = match.group(1)

        # Extract question
        q_match = re.search(r'<span className="flex-1">(Q\.\s*)?([^<]+)</span>', detail_content)
        question = q_match.group(2).strip() if q_match else ""

        # Extract answer
        a_match = re.search(r'<div className="mt-4.*?border-green-600">\s*(.*?)\s*</div>', detail_content, re.DOTALL)
        answer = a_match.group(1).strip() if a_match else ""

        items.append({
            'question': question,
            'answer': answer
        })

    return items

def generate_expanded_faq(items):
    """Generate expanded FAQ format from items."""
    result = []
    result.append('              {/* FAQ */')
    result.append('              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">')
    result.append('                <h2 className="text-3xl font-bold text-gray-900 mb-8">よくある質問</h2>')
    result.append('                <div className="space-y-6">')

    for idx, item in enumerate(items, 1):
        result.append(f'                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">')
        result.append(f'                    <div className="mb-4">')
        result.append(f'                      <div className="flex items-center gap-3 mb-3">')
        result.append(f'                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q{idx}</span>')
        result.append(f'                        <h3 className="font-bold text-[#5A4D41] text-lg">{item["question"]}</h3>')
        result.append(f'                      </div>')
        result.append(f'                    </div>')
        result.append(f'                    <div className="text-[#8D8070] leading-relaxed">')
        result.append(f'                      <p className="mb-3">')
        result.append(f'                        <strong className="text-[#E67A2E]">A.</strong> {item["answer"]}')
        result.append(f'                      </p>')
        result.append(f'                    </div>')
        result.append(f'                  </div>')
        if idx < len(items):
            result.append('')

    result.append('                </div>')
    result.append('              </div>')

    return '\n'.join(result)

def convert_file(file_path):
    """Convert a single file's FAQ section."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        old_faq = find_faq_section(content)
        if not old_faq:
            print(f"  ⚠  FAQ section not found in {file_path}")
            return False

        items = extract_faq_items(old_faq)
        if not items:
            print(f"  ⚠  No FAQ items found in {file_path}")
            return False

        new_faq = generate_expanded_faq(items)

        # Replace old FAQ with new format
        new_content = content.replace(old_faq, new_faq)

        # Update spacing from space-y-4 to space-y-6 in FAQ section
        # (already done in generation above)

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"  ✓  Converted {len(items)} FAQ items in {file_path.name}")
        return True

    except Exception as e:
        print(f"  ✗  Error converting {file_path}: {e}")
        return False

def main():
    """Main conversion function."""
    print("Starting FAQ conversion...")
    print(f"Total files to convert: {len(FILES_TO_CONVERT)}\n")

    converted = 0
    failed = 0

    for file_rel_path in FILES_TO_CONVERT:
        file_path = BASE_DIR / file_rel_path
        print(f"Processing: {file_rel_path}")

        if not file_path.exists():
            print(f"  ✗  File not found: {file_path}")
            failed += 1
            continue

        if convert_file(file_path):
            converted += 1
        else:
            failed += 1
        print()

    print("\n" + "="*60)
    print(f"Conversion complete!")
    print(f"  Successfully converted: {converted}")
    print(f"  Failed: {failed}")
    print("="*60)

if __name__ == "__main__":
    main()
