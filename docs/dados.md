
>A construção de uma base de dados confiável e abrangente sobre o sistema viário urbano requer a integração de múltiplas fontes de informação, cada uma contribuindo com aspectos específicos e complementares. 

>Para este estudo, foram utilizadas bases cartográficas oficiais, dados colaborativos de mapeamento, levantamentos de campo e recursos de sensoriamento remoto, que juntos permitiram a criação de um banco de dados robusto e atualizado sobre a infraestrutura viária e pavimentação de Bagé.

<div style="font-size:2.5rem; font-weight:700; margin-top:1.2rem; margin-bottom:0.5rem;">
Dados Utilizados:
</div>


- **OpenStreetMap (OSM):** rede viária extraída com a biblioteca OSMnx em Python, exportada para Shapefile e posteriormente segmentada e validada.
Dados do SIG Territorial de Bagé: pacote oficial que reúne:

- **Base Municipal GeoJSON:** arquivo fornecido pela Prefeitura Municipal com atributos originais das vias e apoio na atualização toponímica;

- **Planilha Oficial de Logradouros:** lista com nomes atuais e antigos das ruas, usada para harmonização e padronização dos logradouros;

- **Delimitação Territorial** polígonos atualizados dos bairros e da mancha urbana do município.


- **Levantamentos de Campo:** visitas in loco para verificar pavimentação, toponímia e presença de novos trechos não mapeados.
Imagens de Satélite e Fundos Cartográficos: imagens de alta resolução (Google/QuickMapServices) empregadas para conferência visual e complementação da base de dados.

>Essas fontes foram integradas no âmbito do BAGÉ+, formando a base mais completa e atualizada sobre o sistema viário e a pavimentação urbana da cidade.


