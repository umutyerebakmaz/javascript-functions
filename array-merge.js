const mergedArr = $scope.nodes.map(node => {
       const info = $scope.infos.find(info => info.node_id === node.desc);
            if (info) {
                return Object.assign({}, node, info);
            } else {
                return node;
            }
        });

        $scope.nodes = mergedArr;
