
<div style="font-size:3rem; font-weight:700; margin-top:1.2rem; margin-bottom:0.5rem;">
Metodologia
</div>

> A atualização e análise do sistema viário urbano de Bagé-RS foram conduzidas em etapas integradas de aquisição, tratamento, integração e qualificação de dados geoespaciais. O fluxo combinou processamento automatizado em Python (no Google Colab) e edição cartográfica no QGIS, garantindo padronização e rastreabilidade.


<div style="font-size:2.5rem; font-weight:700; margin-top:1.2rem; margin-bottom:0.5rem;">
Fluxo Geral
</div>

> O processo seguiu as seguintes etapas:

> 1. **Delimitação da área de estudo**  
>   Polígono do município obtido via OpenStreetMap (OSM) com a biblioteca OSMnx e exportado para Shapefile.

> 2. **Extração da rede viária**  
 >  Rede motorizada (network_type = "drive") convertida para GeoDataFrames (nós e arestas) preservando atributos como `name`, `highway` e `length`.

> 3. **Segmentação por interseções**  
>    Divisão das linhas nos pontos de cruzamento para gerar trechos homogêneos, adequados à edição cartográfica no QGIS.

> 4. **Identificação e inserção de novas ruas**  
>   Comparação entre OSM, imagens do Google/QuickMapServices e arquivo GeoJSON da Prefeitura de Bagé para atualizar a rede.

> 5. **Verificação e atualização toponímica**  
>   Conferência cruzada OSM × GeoJSON municipal × Google Maps e planilha oficial de nomes atuais/antigos para harmonizar os logradouros.

> 6. **Padronização do tipo de pavimento**  
   Criação do campo `tipo_pavimento` com domínio unificado (Asfalto, Pavimento Intertravado de Concreto, Paralelepípedo, Pedra Irregular e Sem Pavimento).

> 7. **Cálculos estatísticos**  
>   Agregação por logradouro e por bairro para obter extensão total (km), número de trechos, percentuais por tipo de pavimento e densidade viária.

> 8. **Validação e controle de qualidade**  
>   Checagens visuais e automáticas para garantir integridade topológica, consistência dos atributos e registro das alterações.


<div style="font-size:2.5rem; font-weight:700; margin-top:1.2rem; margin-bottom:0.5rem;">
Ferramentas
</div>

>- **Python/Google Colab** para automatização, normalização de dados e geração de tabelas, gráficos e mapas interativos (GeoPandas, Shapely, Folium, Matplotlib, Plotly, OSMnx).  
>- **QGIS** para edição manual e conferência visual das geometrias.  
>- **Google Drive** para centralizar arquivos de entrada e saída e assegurar reprodutibilidade.  

>O resultado final é uma base viária atualizada e consolidada, apta para análises espaciais e suporte ao planejamento municipal.

