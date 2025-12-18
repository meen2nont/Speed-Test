import re
import os

svg_path = 'assets/images/app.svg'
b64_path = 'assets/images/icons/icon_b64.txt'

try:
    with open(b64_path, 'r') as f:
        b64_data = f.read().strip()

    with open(svg_path, 'r') as f:
        content = f.read()

    # Create new symbol
    new_symbol = f'<symbol id="logo" viewBox="0 0 192 192">\n\t\t<image width="192" height="192" xlink:href="data:image/png;base64,{b64_data}" />\n\t</symbol>'

    # Regex to replace the old symbol block
    content = re.sub(r'<symbol id="logo".*?</symbol>', new_symbol, content, flags=re.DOTALL)

    # Replace Desktop Usage
    desk_pattern = r'<use id="logo-Desk" xlink:href="#logo" x="35" y="140" width="222.8" height="50.22"></use>'
    desk_repl = '<use id="logo-Desk" xlink:href="#logo" x="106" y="125" width="80" height="80"></use>'
    if desk_pattern in content:
        content = content.replace(desk_pattern, desk_repl)
        print("Replaced Desktop Logo Usage")
    else:
        print("Desktop Logo Usage Pattern NOT Found")

    # Replace Mobile Usage
    mob_pattern = r'<use id="logo-Desk" xlink:href="#logo" x="38" y="110" width="218.8" height="50.22"></use>'
    mob_repl = '<use id="logo-Desk" xlink:href="#logo" x="107" y="95" width="80" height="80"></use>'
    if mob_pattern in content:
        content = content.replace(mob_pattern, mob_repl)
        print("Replaced Mobile Logo Usage")
    else:
        print("Mobile Logo Usage Pattern NOT Found")

    with open(svg_path, 'w') as f:
        f.write(content)
        print("Successfully updated app.svg")

except Exception as e:
    print(f"Error: {e}")
