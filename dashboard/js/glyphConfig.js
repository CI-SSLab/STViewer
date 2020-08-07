

function glyphSettings()
{
    var out = [

	{gene: 'Col25a1',          taxonomy: 'in_general',  glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Kit',         taxonomy: 'in_general',  glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Meg3',          taxonomy: 'in_general',  glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Enpp2',       taxonomy: 'in_general',  glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Egfl7',          taxonomy: 'in_general',  glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Rreb1',         taxonomy: 'in_general',  glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Tfap2b',          taxonomy: 'in_general',  glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Prkca',        taxonomy: 'in_general',  glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Slc6a1',            taxonomy: 'sst',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc1a1',         taxonomy: 'sst',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Col11a1',           taxonomy: 'sst',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Fyn',           taxonomy: 'sst',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Nts',         taxonomy: 'sst',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Hapln2',         taxonomy: 'sst',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Gad1',          taxonomy: 'sst',         glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: '6330403K07Rik',          taxonomy: 'sst',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Car11',      taxonomy: 'sst',         glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Slc1a2',         taxonomy: 'sst',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Cplx2',        taxonomy: 'sst',         glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Calcr',          taxonomy: 'pvalb',       glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Cd47',         taxonomy: 'pvalb',       glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Anln',        taxonomy: 'pvalb',       glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Snca',        taxonomy: 'pvalb',       glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Cdh13',        taxonomy: 'pvalb',       glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Nos1',         taxonomy: 'pvalb',       glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Timp4',           taxonomy: 'ngf',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Epha3',        taxonomy: 'ngf',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Hmcn1',         taxonomy: 'ngf',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Gad2',         taxonomy: 'ngf',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Foxp2',           taxonomy: 'ngf',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Zfpm2',          taxonomy: 'ngf',         glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Ptprz1',          taxonomy: 'ngf',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Plp1',         taxonomy: 'ngf',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Brs3',         taxonomy: 'ngf',         glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Rorb',        taxonomy: 'cxcl14',      glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Tnr',        taxonomy: 'cxcl14',      glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Map2',         taxonomy: 'cxcl14',      glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Grb14',         taxonomy: 'cxcl14',      glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Nudt4',         taxonomy: 'cxcl14',      glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Slc32a1',          taxonomy: 'cnr1',        glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Adarb2',          taxonomy: 'cnr1',        glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Prr5l',           taxonomy: 'cnr1',        glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Ttn',      taxonomy: 'cnr1',        glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Lbp',        taxonomy: 'cnr1',        glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Chodl',          taxonomy: 'cnr1',        glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Slc17a6',        taxonomy: 'cnr1',        glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Plekha1',         taxonomy: 'cnr1',        glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Cfh',           taxonomy: 'cnr1',        glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Lepr',        taxonomy: 'cnr1',        glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Ebf1',       taxonomy: 'cnr1',        glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Dcn',          taxonomy: 'vip',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Ppfibp1',         taxonomy: 'vip',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Peg3',         taxonomy: 'vip',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Penk',         taxonomy: 'vip',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Dock5',        taxonomy: 'vip',         glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cd63',          taxonomy: 'vip',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Cacna2d1',         taxonomy: 'vip',         glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Tac1',           taxonomy: 'vip',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Syt6',           taxonomy: 'vip',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Itpr2',         taxonomy: 'vip',         glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Foxj1',       taxonomy: 'less_active', glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Nrn1',         taxonomy: 'less_active', glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Pou6f2',         taxonomy: 'less_active', glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Syp',        taxonomy: 'less_active', glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'C030029H02Rik',          taxonomy: 'less_active', glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Prr16',         taxonomy: 'less_active', glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Rasgrf2', taxonomy: 'less_active', glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Th',          taxonomy: 'less_active', glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Prlr',         taxonomy: 'less_active', glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Enpp6',         taxonomy: 'less_active', glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Mpzl1',           taxonomy: 'pc_or_in',    glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc1a3',        taxonomy: 'pc_or_in',    glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Vcan',          taxonomy: 'pc_or_in',    glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Chat',       taxonomy: 'pc_or_in',    glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Prdx6',         taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cspg4',        taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Col6a1',          taxonomy: 'pc_or_in',    glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Slk',         taxonomy: 'pc_or_in',    glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Cbln2',         taxonomy: 'pc_or_in',    glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Qdpr',        taxonomy: 'pc_or_in',    glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Sst',         taxonomy: 'pc_or_in',    glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'Opalin',         taxonomy: 'pc_or_in',    glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Prkg1',        taxonomy: 'pc_or_in',    glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Pcdh15',          taxonomy: 'pc',          glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Ly6a',          taxonomy: 'pc',          glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Gng11',          taxonomy: 'pc',          glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Slc5a7',         taxonomy: 'pc',          glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Cck',          taxonomy: 'pc',          glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Gm32647',       taxonomy: 'pc',          glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Cbln4',          taxonomy: 'pc',          glyphSymbol: 'd',  glyphName: 'diamond'},
	{gene: 'Car2',           taxonomy: 'pc',          glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Sox6',        taxonomy: 'pc',          glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Lgmn',          taxonomy: 'pc',          glyphSymbol: '<',  glyphName: 'triangleLeft'},
	{gene: 'B2m', 	taxonomy: 'pc',          glyphSymbol: '^',  glyphName: 'triangleUp'},
	{gene: 'Gal',         taxonomy: 'pc',          glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Asb4',         taxonomy: 'pc',          glyphSymbol: 'h',  glyphName: 'star6'},
	{gene: 'Mbp',       taxonomy: 'pc2',         glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Pdgfra',         taxonomy: 'pc2',         glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Calca',          taxonomy: 'pc2',         glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Hexb',         taxonomy: 'pc2',         glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Adgrl4',        taxonomy: 'pc2',         glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Aqp4',          taxonomy: 'pc2',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Pnoc',       taxonomy: 'pc2',         glyphSymbol: '>',  glyphName: 'triangleRight'},
	{gene: 'Glp1r',           taxonomy: 'non_neuron',  glyphSymbol: '*',  glyphName: 'asterisk'},
	{gene: 'Esr1',        taxonomy: 'non_neuron',  glyphSymbol: '.',  glyphName: 'point'},
	{gene: 'Cspg5',          taxonomy: 'non_neuron',  glyphSymbol: 's',  glyphName: 'square'},
	{gene: 'Crh',          taxonomy: 'non_neuron',  glyphSymbol: 'x',  glyphName: 'cross'},
	{gene: 'Neu4',           taxonomy: 'non_neuron',  glyphSymbol: '+',  glyphName: 'plus'},
	{gene: 'Gfap',         taxonomy: 'non_neuron',  glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Rgs5',          taxonomy: 'non_neuron',  glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Lpcat2',         taxonomy: 'non_neuron',  glyphSymbol: 'p',  glyphName: 'star5'},
	{gene: 'Ctss',         taxonomy: 'non_neuron',  glyphSymbol: 'o',  glyphName: 'circle'},
	{gene: 'Gm28526',          taxonomy: 'non_neuron',  glyphSymbol: 'v',  glyphName: 'triangleDown'},
	{gene: 'Anxa5',         taxonomy: 'non_neuron',  glyphSymbol: 'p',  glyphName: 'star5'},


        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'},

        ];
    
    return out
}

//create color ramp.
function glyphColor(y) {
    return y === 'non_neuron' ? '#FFFFFF' : //hsv: [0 0 1]);
        y === 'pc_or_in' ? '#407F59' :      //hsv: [.4 .5 .5]);
            y === 'less_active' ? '#96B38F' :   //hsv: [.3 .2 .7]);
                y === 'pc' ? '#00FF00' :            //hsv: [1/3 1 1]);
                    y === 'pc2' ? '#44B300' :           //hsv: [.27 1 .7]);
                        y === 'in_general' ? '#0000FF' :    //hsv: [2/3 1 1]);
                            y === 'sst' ? '#00B3FF' :           //hsv: [.55 1 1]);
                                y === 'pvalb' ? '#5C33FF' :         //hsv: [.7 .8 1]);
                                    y === 'ngf' ? '#FF00E6' :           //hsv: [.85 1 1]);
                                        y === 'cnr1' ? '#FF0000' :          //hsv: [ 1 1 1]);
                                            y === 'vip' ? '#FFC700' :           //hsv: [.13 1 1]);
                                                y === 'cxcl14' ? '#995C00' :        //hsv: [.1 1 .6]);
                                                    '#FD6A02';
}