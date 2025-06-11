import json

# 作成件数
num_items = 160

# 説明テンプレート（あとで編集しやすい形に）
data = {}

for i in range(1, num_items + 1):
    data[str(i)] = {
        "役": f"役 {i}",               # 例: スイカ、チェリーなど
        "押し順": f"左→中→右",         # 例: 実際の押し順を記入
        "解説": f"これは番号 {i} の詳細な解説です。"  # 実際の解説を入れる
    }

# JSONとして保存
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✅ data.json を作成しました（3項目の構造付き）")
