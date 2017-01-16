angular.module('friendsList')
    .controller('mainController', function($scope) {
        $scope.friends = [{
                name: 'Dan',
                bday: '01/16/1899'
            },
            {
                name: 'Jeremy',
                bday: '02/16/1899'
            },
            {
                name: 'Stephen',
                bday: '03/16/1899'
            },
            {
                name: 'Matt',
                bday: '04/16/1899'
            },
            {
                name: 'Joe',
                bday: '05/16/1899'
            }
        ];

        $scope.addFriend = function(name, bday) {
            $scope.friends.push({
                name: name,
                bday: bday
            });
            $scope.friendNameInput = '';
            $scope.friendBdayInput = '';
        }

        $scope.removeFriend = function(e) {
            for (var i = 0; i < $scope.friends.length; i++) {
                if ($scope.friends[i].name === e.friend.name) {
                    $scope.friends.splice(i, 1);
                    break;
                }
            }
            // var friendPos = $scope.friends.indexOf(e.friend);
        }
    });
