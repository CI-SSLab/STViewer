

function glyphSettings()
{
    var out = [

	{gene: 'Col25a1',          taxonomy: 'Col25a1',  glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Kit',         taxonomy: 'Kit',  glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Meg3',          taxonomy: 'Meg3',  glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Enpp2',       taxonomy: 'Enpp2',  glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Egfl7',          taxonomy: 'Egfl7',  glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Rreb1',         taxonomy: 'Rreb1',  glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Tfap2b',          taxonomy: 'Tfap2b',  glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Prkca',        taxonomy: 'Prkca',  glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Slc6a1',            taxonomy: 'Slc6a1',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc1a1',         taxonomy: 'Slc1a1',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Col11a1',           taxonomy: 'Col11a1',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Fyn',           taxonomy: 'Fyn',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Nts',         taxonomy: 'Nts',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Hapln2',         taxonomy: 'Hapln2',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Gad1',          taxonomy: 'Gad1',         glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: '6330403K07Rik',          taxonomy: '6330403K07Rik',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Car11',      taxonomy: 'Car11',         glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Slc1a2',         taxonomy: 'Slc1a2',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Cplx2',        taxonomy: 'Cplx2',         glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Calcr',          taxonomy: 'Calcr',       glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Cd47',         taxonomy: 'Cd47',       glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Anln',        taxonomy: 'Anln',       glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Snca',        taxonomy: 'Snca',       glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Cdh13',        taxonomy: 'Cdh13',       glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Nos1',         taxonomy: 'Nos1',       glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Timp4',           taxonomy: 'Timp4',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Epha3',        taxonomy: 'Epha3',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Hmcn1',         taxonomy: 'Hmcn1',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Gad2',         taxonomy: 'Gad2',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Foxp2',           taxonomy: 'Foxp2',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Zfpm2',          taxonomy: 'Zfpm2',         glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Ptprz1',          taxonomy: 'Ptprz1',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Plp1',         taxonomy: 'Plp1',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Brs3',         taxonomy: 'Brs3',         glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Rorb',        taxonomy: 'Rorb',      glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Tnr',        taxonomy: 'Tnr',      glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Map2',         taxonomy: 'Map2',      glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Grb14',         taxonomy: 'Grb14',      glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Nudt4',         taxonomy: 'Nudt4',      glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Slc32a1',          taxonomy: 'Slc32a1',        glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Adarb2',          taxonomy: 'Adarb2',        glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Prr5l',           taxonomy: 'Prr5l',        glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Ttn',      taxonomy: 'Ttn',        glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Lbp',        taxonomy: 'Lbp',        glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Chodl',          taxonomy: 'Chodl',        glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Slc17a6',        taxonomy: 'Slc17a6',        glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Plekha1',         taxonomy: 'Plekha1',        glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Cfh',           taxonomy: 'Cfh',        glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Lepr',        taxonomy: 'Lepr',        glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Ebf1',       taxonomy: 'Ebf1',        glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Dcn',          taxonomy: 'Dcn',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Ppfibp1',         taxonomy: 'Ppfibp1',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Peg3',         taxonomy: 'Peg3',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Penk',         taxonomy: 'Penk',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Dock5',        taxonomy: 'Dock5',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cd63',          taxonomy: 'Cd63',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Cacna2d1',         taxonomy: 'Cacna2d1',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Tac1',           taxonomy: 'Tac1',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Syt6',           taxonomy: 'Syt6',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Itpr2',         taxonomy: 'Itpr2',         glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Foxj1',       taxonomy: 'Foxj1', glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Nrn1',         taxonomy: 'Nrn1', glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Pou6f2',         taxonomy: 'Pou6f2', glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Syp',        taxonomy: 'Syp', glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'C030029H02Rik',          taxonomy: 'C030029H02Rik', glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Prr16',         taxonomy: 'Prr16', glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Rasgrf2', taxonomy: 'Rasgrf2', glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Th',          taxonomy: 'Th', glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Prlr',         taxonomy: 'Prlr', glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Enpp6',         taxonomy: 'Enpp6', glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Mpzl1',           taxonomy: 'Mpzl1',    glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc1a3',        taxonomy: 'Slc1a3',    glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Vcan',          taxonomy: 'Vcan',    glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Chat',       taxonomy: 'Chat',    glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Prdx6',         taxonomy: 'Prdx6',    glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cspg4',        taxonomy: 'Cspg4',    glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Col6a1',          taxonomy: 'Col6a1',    glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Slk',         taxonomy: 'Slk',    glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Cbln2',         taxonomy: 'Cbln2',    glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Qdpr',        taxonomy: 'Qdpr',    glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Sst',         taxonomy: 'Sst',    glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Opalin',         taxonomy: 'Opalin',    glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Prkg1',        taxonomy: 'Prkg1',    glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Pcdh15',          taxonomy: 'Pcdh15',          glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Ly6a',          taxonomy: 'Ly6a',          glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Gng11',          taxonomy: 'Gng11',          glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc5a7',         taxonomy: 'Slc5a7',          glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cck',          taxonomy: 'Cck',          glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Gm32647',       taxonomy: 'Gm32647',          glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Cbln4',          taxonomy: 'Cbln4',          glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Car2',           taxonomy: 'Car2',          glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Sox6',        taxonomy: 'Sox6',          glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Lgmn',          taxonomy: 'Lgmn',          glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'B2m', 	taxonomy: 'B2m',          glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Gal',         taxonomy: 'Gal',          glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Asb4',         taxonomy: 'Asb4',          glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Mbp',       taxonomy: 'Mbp',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Pdgfra',         taxonomy: 'Pdgfra',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Calca',          taxonomy: 'Calca',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Hexb',         taxonomy: 'Hexb',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Adgrl4',        taxonomy: 'Adgrl4',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Aqp4',          taxonomy: 'Aqp4',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Pnoc',       taxonomy: 'Pnoc',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Glp1r',           taxonomy: 'Glp1r',  glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Esr1',        taxonomy: 'Esr1',  glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Cspg5',          taxonomy: 'Cspg5',  glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Crh',          taxonomy: 'Crh',  glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Neu4',           taxonomy: 'Neu4',  glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Gfap',         taxonomy: 'Gfap',  glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Rgs5',          taxonomy: 'Rgs5',  glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Lpcat2',         taxonomy: 'Lpcat2',  glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Ctss',         taxonomy: 'Ctss',  glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Gm28526',          taxonomy: 'Gm28526',  glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Anxa5',         taxonomy: 'Anxa5',  glyphSymbol: 'p',  glyphName: 'star5'},


        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'},

        ];
    
    return out
}

//create color ramp.
function glyphColor(y) {
return y === '6330403K07Rik' ? '#FFFFFF' : 
       y === 'Adarb2' ? '#407F59' :      
       y === 'Adgrl4' ? '#96B38F' :   
       y === 'Anln' ? '#00FF00' :            
       y === 'Anxa5' ? '#44B300' :          
       y === 'Aqp4' ? '#0000FF' :    
       y === 'Asb4' ? '#00B3FF' :           
       y === 'B2m' ? '#5C33FF' :        
       y === 'Brs3' ? '#FF00E6' :           
       y === 'C030029H02Rik' ? '#FF0000' :       
       y === 'Cacna2d1' ? '#FFC700' :       
       y === 'Calca' ? '#995C00' :
       y === 'Calcr' ? '#DF1736' :
       y === 'Car11' ? '#414AE0' :
       y === 'Car2' ? '#F73A54' :
       y === 'Cbln2' ? '#EA1E5A' :
       y === 'Cbln4' ? '#CBA651' :
       y === 'Cck' ? '#C27E55' : 
       y === 'Cd47' ? '#A0DE63' :
       y === 'Cd63' ? '#CDA0D0' :
       y === 'Cdh13' ? '#211959' :
       y === 'Cfh' ? '#CE15BA' :
       y === 'Chat' ? '#C63E68' :
       y === 'Chodl' ? '#B3F3F0' :
       y === 'Col11a1' ? '#A6640C' :
       y === 'Col25a1' ? '#4AB1DC' :
       y === 'Col6a1' ? '#D708CC' :
       y === 'Cplx2' ? '#664791' :
       y === 'Crh' ? '#85052F' :
       y === 'Cspg4' ? '#A98CF4' :
       y === 'Cspg5' ? '#342EE5' :
       y === 'Ctss' ? '#696F7A' :
       y === 'Dcn' ? '#664791' :
       y === 'Dock5' ? '#C184D5' :
       y === 'Ebf1' ? '#28E29A' :
       y === 'Egfl7' ? '#7A6EC8' :
       y === 'Enpp2' ? '#5ED914' :
       y === 'Enpp6' ? '#9EF68E' :
       y === 'Epha3' ? '#E29A28' :
       y === 'Esr1' ? '#25B52C' :
       y === 'Foxj1' ? '#3857CE' :  
       y === 'Foxp2' ? '#4EDAC5' :                                        
       y === 'Fyn' ? '#8F6C2B' :
       y === 'Gad1' ? '#5F4DFE' :
       y === 'Gad2' ? '#121489' :
       y === 'Gal' ? '#D9034C' :
       y === 'Gfap' ? '#A7E9A0' :
       y === 'Glp1r' ? '#A85E8B' :
       y === 'Gm28526' ? '#3CAD0D' :
       y === 'Gm32647' ? '#244142' :
       y === 'Gng11' ? '#60C1E8' :
       y === 'Grb14' ? '#72EEA1' :
       y === 'Hapln2' ? '#66593B' :
       y === 'Hexb' ? '#887298' :
       y === 'Hmcn1' ? '#163D72' :
       y === 'Itpr2' ? '#DF87F3' :
       y === 'Kit' ? '#1F3084' :
       y === 'Lbp' ? '#B0DDB2' :
       y === 'Lepr' ? '#F32316' :
       y === 'Lgmn' ? '#A675B6' :
       y === 'Lpcat2' ? '#EBA3EE' :
       y === 'Ly6a' ? '#BD6D97' :
       y === 'Map2' ? '#27AFAB' :
       y === 'Mbp' ? '#F49700' :
       y === 'Meg3' ? '#27AFAB' :
       y === 'Mpzl1' ? '#2313D7' :
       y === 'Neu4' ? '#19ABDB' :
       y === 'Nos1' ? '#EF8642' :
       y === 'Nrn1' ? '#713422' :
       y === 'Nts' ? '#19ABDB' :
       y === 'Nudt4' ? '#3D34A2' :
       y === 'Opalin' ? '#D88E61' :
       y === 'Pcdh15' ? '#27AFAB' :
       y === 'Pdgfra' ? '#8721ED' :
       y === 'Peg3' ? '#470473' :
       y === 'Penk' ? '#DDF64A' :
       y === 'Plekha1' ? '#C37CA3' :
       y === 'Plp1' ? '#5E703F' :
       y === 'Pnoc' ? '#8F1500' :
       y === 'Pou6f2' ? '#BE4B57' :
       y === 'Ppfibp1' ? '#F29D81' :
       y === 'Prdx6' ? '#D87CB6' :
       y === 'Prkca' ? '#9C8374' :
       y === 'Prkg1' ? '#48190A' :
       y === 'Prlr' ? '#E2AD40' :
       y === 'Prr16' ? '#A21518' :
       y === 'Prr5l' ? '#CCDCEC' :
       y === 'Ptprz1' ? '#4C7B92' :
       y === 'Qdpr' ? '#9F74DE' :
       y === 'Rasgrf2' ? '#AB8A6D' :
       y === 'Rgs5' ? '#A9424F' :
       y === 'Rorb' ? '#C8AE12' :
       y === 'Rreb1' ? '#060941' :
       y === 'Slc17a6' ? '#C51A5B' :
       y === 'Slc1a1' ? '#1083DF' :
       y === 'Slc1a2' ? '#7D1C32' :
       y === 'Slc1a3' ? '#8F49EA' :
       y === 'Slc32a1' ? '#D7E58C' :
       y === 'Slc5a7' ? '#582081' :
       y === 'Slc6a1' ? '#62877D' :
       y === 'Slk' ? '#BDC4C2' :
       y === 'Snca' ? '#21F519' :
       y === 'Sox6' ? '#0B7222' :
       y === 'Sst' ? '#457EDE' :
       y === 'Syp' ? '#F37A41' :
       y === 'Syt6' ? '#C9E0BC' :
       y === 'Tac1' ? '#FC6E52' :
       y === 'Tfap2b' ? '#932C3E' :
       y === 'Th' ? '#6A07A4' :
       y === 'Timp4' ? '#E9CCAF' :
       y === 'Tnr' ? '#CD37FA' :
       y === 'Ttn' ? '#ED6983' :
       y === 'Vcan' ? '#127D5E' :
       y === 'Zfpm2' ? '#68E9E5' :
}


                                                             



