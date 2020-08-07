

function classColorsCodes()
{
    var out = [
        
        {className: 'n00_Pam/Nnat', IdentifiedType: ' n00_Pam/Nnat', color: '#7757FA'},
        {className: 'n01_Foxp2/Cck', IdentifiedType: ' n01_Foxp2/Cck', color: '#EA249E'},
        {className: 'n02_Hmcn1/Cartpt', IdentifiedType: ' n02_Hmcn1/Cartpt', color: '#F6BE82'},
        {className: 'n03_Tac1/Abi3bp', IdentifiedType: ' n03_Tac1/Abi3bp', color: '#655F21'},
        {className: 'n04_Gpc5', IdentifiedType: ' n04_Gpc5', color: '#97B667'},
        {className: 'n05_Zfp804b', IdentifiedType: ' n05_Zfp804b', color: '#E4D74D'},
        {className: 'n06_Chst9/Zfhx3', IdentifiedType: ' n06_Chst9/Zfhx3', color: '#5938DB'},
        {className: 'n07_Gm32647', IdentifiedType: ' n07_Gm32647', color: '#D096A9'},
        {className: 'n08_Col11a1/Nfib', IdentifiedType: ' n08_Col11a1/Nfib', color: '#CC8C20'},
        {className: 'n09_Adarb2/Prlr', IdentifiedType: ' n09_Adarb2/Prlr', color: '#ECDADF'},
        {className: 'n10_Penk/Col9a1', IdentifiedType: ' n10_Penk/Col9a1', color: '#FE032E'},
        {className: 'n11_Ntng1/Vav3', IdentifiedType: ' n11_Ntng1/Vav3', color: '#ED6623'},
        {className: 'n12_Tac1/Epha3', IdentifiedType: ' n12_Tac1/Epha3', color: '#A3084C'},
        {className: 'n13_Sst', IdentifiedType: ' n13_Sst', color: '#880BF3'},
        {className: 'n14_Hcn1', IdentifiedType: ' n14_Hcn1', color: '#345170'},
        {className: 'n15_Calca/Pou6f2', IdentifiedType: ' n15_Calca/Pou6f2', color: '#703824'},
        {className: 'n16_Cpne9/Col27a1', IdentifiedType: ' n16_Cpne9/Col27a1', color: '#3350EE'},
        {className: 'n17_Pcdh15/Tcf4', IdentifiedType: ' n17_Pcdh15/Tcf4', color: '#3DCCFF'},
        {className: 'n18_Nefm/Rreb1', IdentifiedType: ' n18_Nefm/Rreb1', color: '#996E00'},
        {className: 'n19_Pde11a', IdentifiedType: ' n19_Pde11a', color: '#DB66C2'},
        {className: 'n20_Adarb2/Epha3', IdentifiedType: ' n20_Adarb2/Epha3', color: '#FAEC3B'},
        {className: 'n21_Ttn', IdentifiedType: ' n21_Ttn', color: '#1FADEB'},
        {className: 'n22_Slc32a1/Foxp2', IdentifiedType: ' n22_Slc32a1/Foxp2', color: '#BF0153'},
        {className: 'n23_Slc5a7/Chat', IdentifiedType: ' n23_Slc5a7/Chat', color: '#FAE52E'},
        {className: 'n24_Slc18a2/Th', IdentifiedType: ' n24_Slc18a2/Th', color: '#BDA800'},
        {className: 'n25_Il1rapl2', IdentifiedType: ' n25_Il1rapl2', color: '#220327'},
        {className: 'n26_Gm28526', IdentifiedType: ' n26_Gm28526', color: '#FF00E6'},
        {className: 'n27_4931429P17Rik/Cdh23', IdentifiedType: ' n27_4931429P17Rik/Cdh23', color: '#CD3F6A'},
        {className: 'n28_Col11a1/Zfhx3', IdentifiedType: ' n28_Col11a1/Zfhx3', color: '#6D8C8F'},
        {className: 'n29_Gm11867/Naaladl2', IdentifiedType: ' n29_Gm11867/Naaladl2', color: '#9906A2'},
        {className: 'n30_Nts/Col5a2', IdentifiedType: ' n30_Nts/Col5a2', color: '#DBC70F'},
        {className: 'n31_Nps/Qrfpr', IdentifiedType: ' n31_Nps/Qrfpr', color: '#D59C55'},
        {className: 'n32_Tnc/Rreb1', IdentifiedType: ' n32_Tnc/Rreb1', color: '#510441'},
        {className: 'n33_Prph/Piezo2', IdentifiedType: ' n33_Prph/Piezo2', color: '#FF00E6'},
        {className: 'Astro1', IdentifiedType: ' Astro1', color: '#44ED5A'},
        {className: 'Astro2', IdentifiedType: ' Astro2', color: '#44ED5A'},
        {className: 'Astro3', IdentifiedType: ' Astro3', color: '#44ED5A'},
        {className: 'Oligo1', IdentifiedType: ' Oligo1', color: '#1E6EE3'},
        {className: 'Oligo2', IdentifiedType: ' Oligo2', color: '#1E6EE3'},
        {className: 'Oligo3', IdentifiedType: ' Oligo3', color: '#1E6EE3'},
        {className: 'OPCs1', IdentifiedType: ' OPCs1', color: '#4448DC'},
        {className: 'OPCs2', IdentifiedType: ' OPCs2', color: '#4448DC'},
        {className: 'VECs/Pericyte', IdentifiedType: ' VECs/Pericyte', color: '#FFC0CB'},
        {className: 'PVM/Micro', IdentifiedType: ' PVM/Micro', color: '#FF00FF'},
        {className: 'Ependymocyte', IdentifiedType: ' Ependymocyte', color: '#FFFFFF'},
        {className: 'CPE_cells', IdentifiedType: ' CPE_cells', color: '#FFA07A'},
        {className: 'VLMCs1', IdentifiedType: ' VLMCs1', color: '#220327'},
        {className: 'VLMCs2', IdentifiedType: ' VLMCs2', color: '#220327'},
        {className: 'VLMCs3', IdentifiedType: ' VLMCs3', color: '#220327'},
        {className: 'Zero', IdentifiedType: 'Zero', color: '#000000'},
        {className: 'Other', IdentifiedType: 'Other', colorGroup: 'Other', color: '#A9B7BF'},


    ];

    return out
}