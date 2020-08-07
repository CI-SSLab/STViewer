function config() {
    var ini = [
        {
            name: 'default',
            roi: {"x0": 0, "x1": 36355, "y0": 0, "y1": 55133 }, // For the full coronal that should be fine. It is the dimensions of your tif file
            imageSize: [172859, 262144], //  I will explain on another email how to get these
            tiles: './dashboard/img/262144px_new_seg_jpg/{z}/{y}/{x}.jpg', //DO NOT CHANGE THIS
            cellBoundaries: './dashboard/data/cell_coords.json', //Do not split this. Your javascript code expects that in one single file
            spot_json: function(d){ return './dashboard/data/geneData_split/' + 'geneData_' + d + '.json'}, // You might have to edit the path shown inside the function. The param d is an int taking the values 0,1,2,3,4
            cell_json: function(d){ return './dashboard/data/cellData_split/' + 'cellData_' + d + '.json'}, // Same comment as above
            num_jsons: 5 // number of json splits
        },
    ];
    var out = d3.map(ini, function (d) {
        return d.name;
    });
    return out;
}



// function config() {
//     var ini = [
//         {
//             name: 'default',
//             roi: {"x0": 0, "x1": 36355, "y0": 0, "y1": 55133},
//             imageSize: [172859, 262144],
//             cellBoundaries: './dashboard/data/cell_coords.json',
//             spot_json: './dashboard/data/geneData.json',
//             cell_json: './dashboard/data/cellData.json',
//             tiles: './dashboard/img_landscape/36355px/{z}/{y}/{x}.jpg',
//             num_jsons: 1 // number of json splits
//         },
//     ];
//     var out = d3.map(ini, function (d) {
//         return d.name;
//     });
//     return out
// }
