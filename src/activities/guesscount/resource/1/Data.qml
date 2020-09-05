/* GCompris - Data.qml
 *
 * Copyright (C) 2020 Deepak Kumar <deepakdk2431@gmail.com>
 *
 * Authors:
 *   Deepak Kumar <deepakdk2431@gmail.com>
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

import GCompris 1.0

Data {
    objective: qsTr("Practice algebraic calculations with a single operator.")
    difficulty: 3

    data: [
        {
            "dataItems":[
                [

                    [['+'],[  [[1,2,4],3] , [[3,4,5],7] ,[[6,2,7],8] ,[[5,2,4],7] ,[[9,2,4],11] ,[[4,6,2],6],[[1,6,5],7] ,[[3,2,4],5] ,[[13,1,4],14] ,[[5,8,9],13]  ]],
                    [['-'],[  [[2,1,3],1] , [[3,1,0],2] ,[[7,2,3],5] ,[[6,2,2],4] ,[[9,2,4],7] ,[[8,5,5],3],[[9,5,3],4],[[18,9,8],9],[[5,1,2],4],[[6,3,7],3],[[5,4,1],1] ]],
                    [['*'],[  [[2,1,3],2] , [[3,1,4],3] ,[[7,2,5],14] ,[[6,2,1],12] ,[[9,2,3],18] ,[[8,5,5],40],[[9,5,6],45],[[1,9,2],9],[[5,1,4],5] ]],
                    [['/'],[  [[2,1,3],2] , [[3,1,2],3] ,[[8,2,1],4] ,[[6,2,7],3] ,[[9,3,2],3] ,[[6,4,2 ],2],[[9,3,4],3],[[18,9,3],2] ]]
                ]
            ],
            "levelSchema": [4,4,3,3],
            "defaultOperators": [["+"],["-"],["/"],["*"]]
        }

    ]
}
