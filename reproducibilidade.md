# Reprodutibilidade

Para assegurar que qualquer pesquisador ou técnico possa reproduzir os resultados, todo o fluxo foi implementado em um **notebook Python no Google Colab**, conectado diretamente ao Google Drive do projeto.

## 3.1 Ambiente Automatizado

- Instalação automática das bibliotecas GeoPandas, Shapely, Folium, Matplotlib, Plotly e dependências no início do notebook.
- Montagem do Google Drive para acesso direto aos shapefiles, GeoJSONs e CSVs originais e para salvar os outputs no mesmo diretório do projeto.

## 3.2 Funções Utilitárias

O notebook define funções para:

- **Padronização** de nomes de logradouros (`normaliza_nome()`).
- **Formatação** de valores em km e % (`fmt_km()`, `fmt_pct()`).
- **Garantia de colunas métricas** (`ensure_columns()`), reprojetando para EPSG:31981 e criando automaticamente comprimentos e descrições de pavimento.
- **Exportação** de DataFrames e GeoDataFrames para CSV, GeoJSON ou Shapefile (`save_df()`, `save_gdf()`).
- **Exportação de gráficos e mapas** (`save_fig()`, `save_map()`, `save_plotly_fig()`).

## 3.3 Organização dos Arquivos

O diretório base do projeto contém os shapefiles originais e subpastas específicas para armazenar:

- Tabelas consolidadas
- Gráficos PNG
- GeoJSONs
- Mapas HTML (Folium/Plotly)

Essa organização centralizada evita perdas de dados e facilita a navegação pelos resultados.

## 3.4 Execução Passo a Passo

Cada célula do notebook está comentada e documentada, permitindo:

1. Montar o ambiente.
2. Carregar e inspecionar os dados.
3. Normalizar nomes e calcular comprimentos.
4. Consolidar logradouros.
5. Gerar estatísticas descritivas e gráficos.
6. Criar mapas interativos com nomes, comprimentos e tipos de pavimento.

Esse encadeamento garante **transparência, rastreabilidade e repetição dos resultados**.