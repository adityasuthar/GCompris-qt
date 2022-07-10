 /* GCompris - Data.qml
 *
 * SPDX-FileCopyrightText: 2022 Aastha Chauhan <aastha.chauhan01@gmail.com>
 *
 * Authors:
 *   Aastha Chauhan <aastha.chauhan01@gmail.com>
 *
 *   SPDX-License-Identifier: GPL-3.0-or-later
 */

import GCompris 1.0

Data {
    objective: qsTr("Numbers from 1 to 1 milliard.")
    difficulty: 3

    data: [
        {
            minValue: 1,
            maxValue: 500000000,
            count: 4
        },
        {
            minValue: 500000001,
            maxValue: 1000000000,
            count: 4
        }
    ]
}

