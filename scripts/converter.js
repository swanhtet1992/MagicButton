// Zawgyi<>Unicode converter python module
// Based on rules from Parabaik Myanmar Text Converter
// Copyright (C) 2014 Ngwe Tun (Solveware Solution)
// Copyright (C) 2014 Thura Hlaing

// This file is part of Paytan.

// Paytan is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Paytan is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

function uni512zg1(input_text) {
    var output_text = input_text;
    output_text = output_text.replace(/\u104e\u1004\u103a\u1038/gm, "\u104e");
    output_text = output_text.replace(/\u102b\u103a/gm, "\u105a");
    output_text = output_text.replace(/\u102d\u1036/gm, "\u108e");
    output_text = output_text.replace(/\u103f/gm, "\u1086");
    output_text = output_text.replace(/(\?<=\u102f)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u102f\u1036)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1030)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1030\u1036)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1014)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1014[\u103a\u1032])\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u103b)\u1037/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u103b[\u1032\u1036])\u1037/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u103d)\u1037/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u103d[\u1032])\u1037/gm, "\u1095");
    output_text = output_text.replace(/(\?<=[\u103b\u103c\u103d])\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=[\u103b\u103c\u103d][\u102d\u1036])\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=(\u1039[\u1000-\u1021]))\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=(\u1039[\u1000-\u1021])[\u102d\u1036])\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=[\u100a\u100c\u1020\u1025\u1029])\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=[\u100a\u100c\u1020\u1025\u1029][\u102d\u1036])\u102f/gm, "\u1033");
    output_text = output_text.replace(/(\?<=[\u103b\u103c])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103d])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103e])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103d][\u103e])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103d][\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103e][\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u103b\u103c][\u103d][\u103e][\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=(\u1039[\u1000-\u1021]))\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=(\u1039[\u1000-\u1021])[\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u100a\u100c\u1020\u1025\u1029])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=[\u100a\u100c\u1020\u1025\u1029][\u102d\u1036])\u1030/gm, "\u1034");
    output_text = output_text.replace(/(\?<=\u103c)\u103e/gm, "\u1087");
    output_text = output_text.replace(/\u1009(\?=[\u103a])/gm, "\u1025");
    output_text = output_text.replace(/\u1009(\?=\u1039[\u1000-\u1021])/gm, "\u1025");
    output_text = output_text.replace(/([\u1000-\u1021\u1029])((\?:\u1039[\u1000-\u1021])?)((\?:[\u103b-\u103e\u1087]*)?)\u1031/gm, "\u1031$1$2$3");
    output_text = output_text.replace(/([\u1000-\u1021\u1029])((\?:\u1039[\u1000-\u1021\u1000-\u1021])?)(\u103c)/gm, "$3$1$2");
    output_text = output_text.replace(/\u1004\u103a\u1039/gm, "\u1064");
    output_text = output_text.replace(/(\u1064)((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u102d/gm, "$2$3$4\u108b");
    output_text = output_text.replace(/(\u1064)((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u102e/gm, "$2$3$4\u108c");
    output_text = output_text.replace(/(\u1064)((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u1036/gm, "$2$3$4\u108d");
    output_text = output_text.replace(/(\u1064)((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])/gm, "$2$3$4\u1064");
    output_text = output_text.replace(/\u100a(\?=[\u1039\u102f\u1030])/gm, "\u106b");
    output_text = output_text.replace(/\u100a/gm, "\u100a");
    output_text = output_text.replace(/\u101b(\?=[\u102f\u1030])/gm, "\u1090");
    output_text = output_text.replace(/\u101b/gm, "\u101b");
    output_text = output_text.replace(/\u1014(\?=[\u1039\u103d\u103e\u102f\u1030])/gm, "\u108f");
    output_text = output_text.replace(/\u1014/gm, "\u1014");
    output_text = output_text.replace(/\u1039\u1000/gm, "\u1060");
    output_text = output_text.replace(/\u1039\u1001/gm, "\u1061");
    output_text = output_text.replace(/\u1039\u1002/gm, "\u1062");
    output_text = output_text.replace(/\u1039\u1003/gm, "\u1063");
    output_text = output_text.replace(/\u1039\u1005/gm, "\u1065");
    output_text = output_text.replace(/\u1039\u1006/gm, "\u1066");
    output_text = output_text.replace(/(\?<=[\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108f\u1015\u1016\u1017\u1019\u101d])\u1066/gm, "\u1067");
    output_text = output_text.replace(/\u1039\u1007/gm, "\u1068");
    output_text = output_text.replace(/\u1039\u1008/gm, "\u1069");
    output_text = output_text.replace(/\u1039\u100f/gm, "\u1070");
    output_text = output_text.replace(/\u1039\u1010/gm, "\u1071");
    output_text = output_text.replace(/(\?<=[\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108f\u1015\u1016\u1017\u1019\u101d])\u1071/gm, "\u1072");
    output_text = output_text.replace(/\u1039\u1011/gm, "\u1073");
    output_text = output_text.replace(/(\?<=[\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108f\u1015\u1016\u1017\u1019\u101d])\u1073/gm, "\u1074");
    output_text = output_text.replace(/\u1039\u1012/gm, "\u1075");
    output_text = output_text.replace(/\u1039\u1013/gm, "\u1076");
    output_text = output_text.replace(/\u1039\u1014/gm, "\u1077");
    output_text = output_text.replace(/\u1039\u1015/gm, "\u1078");
    output_text = output_text.replace(/\u1039\u1016/gm, "\u1079");
    output_text = output_text.replace(/\u1039\u1017/gm, "\u107a");
    output_text = output_text.replace(/\u1039\u1018/gm, "\u107b");
    output_text = output_text.replace(/\u1039\u1019/gm, "\u107c");
    output_text = output_text.replace(/\u1039\u101c/gm, "\u1085");
    output_text = output_text.replace(/\u100f\u1039\u100d/gm, "\u1091");
    output_text = output_text.replace(/\u100b\u1039\u100c/gm, "\u1092");
    output_text = output_text.replace(/\u1039\u100c/gm, "\u106d");
    output_text = output_text.replace(/\u100b\u1039\u100b/gm, "\u1097");
    output_text = output_text.replace(/\u1039\u100b/gm, "\u106c");
    output_text = output_text.replace(/\u100e\u1039\u100d/gm, "\u106f");
    output_text = output_text.replace(/\u100d\u1039\u100d/gm, "\u106e");
    output_text = output_text.replace(/\u1009(\?=\u103a)/gm, "\u1025");
    output_text = output_text.replace(/\u1025(\?=[\u1039\u102f\u1030])/gm, "\u106a");
    output_text = output_text.replace(/\u1025/gm, "\u1025");
    output_text = output_text.replace(/\u103a/gm, "\u1039");
    output_text = output_text.replace(/\u103b\u103d\u103e/gm, "\u107d\u108a");
    output_text = output_text.replace(/\u103d\u103e/gm, "\u108a");
    output_text = output_text.replace(/\u103b/gm, "\u103a");
    output_text = output_text.replace(/\u103c/gm, "\u103b");
    output_text = output_text.replace(/\u103d/gm, "\u103c");
    output_text = output_text.replace(/\u103e/gm, "\u103d");
    output_text = output_text.replace(/\u103a(\?=[\u103c\u103d\u108a])/gm, "\u107d");
    output_text = output_text.replace(/(\?<=\u100a(\?:[\u102d\u102e\u1036\u108b\u108c\u108d\u108e]))\u103d/gm, "\u1087");
    output_text = output_text.replace(/(\?<=\u100a)\u103d/gm, "\u1087");
    output_text = output_text.replace(/\u103b(\?=[\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101e\u101f\u1021])/gm, "\u107e");
    output_text = output_text.replace(/\u107e([\u1000-\u1021\u108f])(\?=[\u102d\u102e\u1036\u108b\u108c\u108d\u108e])/gm, "\u1080$1");
    output_text = output_text.replace(/\u107e([\u1000-\u1021\u108f])(\?=[\u103c\u108a])/gm, "\u1082$1");
    output_text = output_text.replace(/\u103b([\u1000-\u1021\u108f])(\?=[\u102d\u102e\u1036\u108b\u108c\u108d\u108e])/gm, "\u107f$1");
    output_text = output_text.replace(/\u103b([\u1000-\u1021\u108f])(\?=[\u103c\u108a])/gm, "\u1081$1");
    output_text = output_text.replace(/(\?<=\u1014)\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1014[\u103a\u1032])\u1037/gm, "\u1094");
    output_text = output_text.replace(/(\?<=\u1033)\u1094/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u1033[\u1036])\u1094/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u1034)\u1094/gm, "\u1095");
    output_text = output_text.replace(/(\?<=\u1034[\u1036])\u1094/gm, "\u1095");
    output_text = output_text.replace(/(\?<=[\u103c\u103d\u108a])\u1037/gm, "\u1095");
    output_text = output_text.replace(/(\?<=[\u103c\u103d\u108a][\u1032])\u1037/gm, "\u1095");
    return output_text;
}

function zg12uni51(input_text) {
    var output_text = input_text;
    output_text = output_text.replace(/\u106a/gm, "\u1009");
    output_text = output_text.replace(/\u1025(\?=[\u1039\u102c])/gm, "\u1009");
    output_text = output_text.replace(/\u1025\u102e/gm, "\u1026");
    output_text = output_text.replace(/\u106b/gm, "\u100a");
    output_text = output_text.replace(/\u1090/gm, "\u101b");
    output_text = output_text.replace(/\u1040/gm, "\u1040");
    output_text = output_text.replace(/\u108f/gm, "\u1014");
    output_text = output_text.replace(/\u1012/gm, "\u1012");
    output_text = output_text.replace(/\u1013/gm, "\u1013");
    output_text = output_text.replace(/[\u103d\u1087]/gm, "\u103e");
    output_text = output_text.replace(/\u103c/gm, "\u103d");
    output_text = output_text.replace(/[\u103b\u107e\u107f\u1080\u1081\u1082\u1083\u1084]/gm, "\u103c");
    output_text = output_text.replace(/[\u103a\u107d]/gm, "\u103b");
    output_text = output_text.replace(/\u103d\u103b/gm, "\u103b\u103d");
    output_text = output_text.replace(/\u108a/gm, "\u103d\u103d");
    output_text = output_text.replace(/\u103d\u103d/gm, "\u103d\u103d");
    output_text = output_text.replace(/((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u1064/gm, "\u1064$1$2$3");
    output_text = output_text.replace(/((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u108b/gm, "\u1064$1$2$3\u102d");
    output_text = output_text.replace(/((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u108c/gm, "\u1064$1$2$3\u102e");
    output_text = output_text.replace(/((\?:\u1031)?)((\?:\u103c)?)([\u1000-\u1021])\u108d/gm, "\u1064$1$2$3\u1036");
    output_text = output_text.replace(/\u105a/gm, "\u102b\u103a");
    output_text = output_text.replace(/\u108e/gm, "\u102d\u1036");
    output_text = output_text.replace(/\u1033/gm, "\u102f");
    output_text = output_text.replace(/\u1034/gm, "\u1030");
    output_text = output_text.replace(/\u1088/gm, "\u103d\u102f");
    output_text = output_text.replace(/\u1089/gm, "\u103d\u1030");
    output_text = output_text.replace(/\u1039/gm, "\u103a");
    output_text = output_text.replace(/[\u1094\u1095]/gm, "\u1037");
    output_text = output_text.replace(/([\u1000-\u1021])([\u102c\u102d\u102e\u1032\u1036]){1,2}([\u1060\u1061\u1062\u1063\u1065\u1066\u1067\u1068\u1069\u1070\u1071\u1072\u1073\u1074\u1075\u1076\u1077\u1078\u1079\u107a\u107b\u107c\u1085])/gm, "$1$3$2");
    output_text = output_text.replace(/\u1064/gm, "\u1004\u103a\u1039");
    output_text = output_text.replace(/\u104e/gm, "\u104e\u1004\u103a\u1038");
    output_text = output_text.replace(/\u1086/gm, "\u103f");
    output_text = output_text.replace(/\u1060/gm, "\u1039\u1000");
    output_text = output_text.replace(/\u1061/gm, "\u1039\u1001");
    output_text = output_text.replace(/\u1062/gm, "\u1039\u1002");
    output_text = output_text.replace(/\u1063/gm, "\u1039\u1003");
    output_text = output_text.replace(/\u1065/gm, "\u1039\u1005");
    output_text = output_text.replace(/[\u1066\u1067]/gm, "\u1039\u1006");
    output_text = output_text.replace(/\u1068/gm, "\u1039\u1007");
    output_text = output_text.replace(/\u1069/gm, "\u1039\u1008");
    output_text = output_text.replace(/\u106c/gm, "\u1039\u100b");
    output_text = output_text.replace(/\u1070/gm, "\u1039\u100f");
    output_text = output_text.replace(/[\u1071\u1072]/gm, "\u1039\u1010");
    output_text = output_text.replace(/[\u1073\u1074]/gm, "\u1039\u1011");
    output_text = output_text.replace(/\u1075/gm, "\u1039\u1012");
    output_text = output_text.replace(/\u1076/gm, "\u1039\u1013");
    output_text = output_text.replace(/\u1077/gm, "\u1039\u1014");
    output_text = output_text.replace(/\u1078/gm, "\u1039\u1015");
    output_text = output_text.replace(/\u1079/gm, "\u1039\u1016");
    output_text = output_text.replace(/\u107a/gm, "\u1039\u1017");
    output_text = output_text.replace(/\u107b/gm, "\u1039\u1018");
    output_text = output_text.replace(/\u107c/gm, "\u1039\u1019");
    output_text = output_text.replace(/\u1085/gm, "\u1039\u101c");
    output_text = output_text.replace(/\u106d/gm, "\u1039\u100c");
    output_text = output_text.replace(/\u1091/gm, "\u100f\u1039\u100d");
    output_text = output_text.replace(/\u1092/gm, "\u100b\u1039\u100c");
    output_text = output_text.replace(/\u1097/gm, "\u100b\u1039\u100b");
    output_text = output_text.replace(/\u106f/gm, "\u100e\u1039\u100d");
    output_text = output_text.replace(/\u106e/gm, "\u100d\u1039\u100d");
    output_text = output_text.replace(/(\u103c)([\u1000-\u1021])((\?:\u1039[\u1000-\u1021])?)/gm, "$2$3$1");
    output_text = output_text.replace(/(\u103d)(\u103d)([\u103b\u103c])/gm, "$3$2$1");
    output_text = output_text.replace(/(\u103d)([\u103b\u103c])/gm, "$2$1");
    output_text = output_text.replace(/(\u103d)([\u103b\u103c])/gm, "$2$1");
    output_text = output_text.replace(/(\?<=([\u1000-\u101c\u101e-\u102a\u102c\u102e-\u103d\u104c-\u109f]))(\u1040)(\?=\s)?/gm, "\u101d");
    output_text = output_text.replace(/(\?<=(\u101d))(\u1040)(\?=\s)?/gm, "\u101d");
    output_text = output_text.replace(/(\?<=([\u1000-\u101c\u101e-\u102a\u102c\u102e-\u103d\u104c-\u109f\s]))(\u1047)/gm, "\u101b");
    output_text = output_text.replace(/(\u1047)(\?=[\u1000-\u101c\u101e-\u102a\u102c\u102e-\u103d\u104c-\u109f\s])/gm, "\u101b");
    output_text = output_text.replace(/((\?:\u1031)?)([\u1000-\u1021])((\?:\u1039[\u1000-\u1021])?)((\?:[\u102d\u102e\u1032])?)([\u1036\u1037\u1038]{0,2})([\u103b-\u103d]{0,3})((\?:[\u102f\u1030])?)([\u1036\u1037\u1038]{0,2})((\?:[\u102d\u102e\u1032])?)/gm, "$2$3$6$1$4$9$7$5$8");
    output_text = output_text.replace(/\u1036\u102f/gm, "\u102f\u1036");
    output_text = output_text.replace(/(\u103a)(\u1037)/gm, "$2$1");
    return output_text;
}