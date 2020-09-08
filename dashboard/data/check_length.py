import pandas as pd

df_list = []
for i in range(5):
    filename = './cellData_split/cellData_%d.json' % i
    df = pd.read_json(filename)
    df_list.append(df)
out = pd.concat(df_list)

cellCoords = pd.read_json('./cell_coords.json')

print("Cell shape:", out.shape)
print("Crds shape:", cellCoords.shape)
