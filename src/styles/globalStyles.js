import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ratio = hp(100) / wp(100);

const globalStyles = StyleSheet.create({
  // Font Size 9
  font9: {
    fontSize: RFValue(9),
  },
  font9_1_1: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.1),
  },
  font9_1_15: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.15),
  },
  font9_1_2: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.2),
  },
  font9_1_25: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.25),
  },
  font9_1_3: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.3),
  },
  font9_1_4: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.4),
  },
  font9_1_5: {
    fontSize: RFValue(9),
    lineHeight: RFValue(9 * 1.5),
  },

  // Font Size 10
  font10: {
    fontSize: RFValue(10),
  },
  font10_1_1: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.1),
  },
  font10_1_15: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.15),
  },
  font10_1_2: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.2),
  },
  font10_1_25: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.25),
  },
  font10_1_3: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.3),
  },
  font10_1_4: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.4),
  },
  font10_1_5: {
    fontSize: RFValue(10),
    lineHeight: RFValue(10 * 1.5),
  },

  // Font Size 11
  font11: {
    fontSize: RFValue(11),
  },
  font11_1_1: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.1),
  },
  font11_1_15: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.15),
  },
  font11_1_2: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.2),
  },
  font11_1_25: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.25),
  },
  font11_1_3: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.3),
  },
  font11_1_4: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.4),
  },
  font11_1_5: {
    fontSize: RFValue(11),
    lineHeight: RFValue(11 * 1.5),
  },

  // Font Size 12
  font12: {
    fontSize: RFValue(12),
  },
  font12_1_1: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.1),
  },
  font12_1_15: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.15),
  },
  font12_1_2: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.2),
  },
  font12_1_25: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.25),
  },
  font12_1_3: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.3),
  },
  font12_1_4: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.4),
  },
  font12_1_5: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12 * 1.5),
  },

  // Font Size 13
  font13: {
    fontSize: RFValue(13),
  },
  font13_1_1: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.1),
  },
  font13_1_15: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.15),
  },
  font13_1_2: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.2),
  },
  font13_1_25: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.25),
  },
  font13_1_3: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.3),
  },
  font13_1_4: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.4),
  },
  font13_1_5: {
    fontSize: RFValue(13),
    lineHeight: RFValue(13 * 1.5),
  },

  // Font Size 14
  font14: {
    fontSize: RFValue(14),
  },
  font14_1_1: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.1),
  },
  font14_1_15: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.15),
  },
  font14_1_2: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.2),
  },
  font14_1_25: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.25),
  },
  font14_1_3: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.3),
  },
  font14_1_4: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.4),
  },
  font14_1_5: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14 * 1.5),
  },

  // Font Size 15
  font15: {
    fontSize: RFValue(15),
  },
  font15_1_1: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.1),
  },
  font15_1_15: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.15),
  },
  font15_1_2: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.2),
  },
  font15_1_25: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.25),
  },
  font15_1_3: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.3),
  },
  font15_1_4: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.4),
  },
  font15_1_5: {
    fontSize: RFValue(15),
    lineHeight: RFValue(15 * 1.5),
  },

  // Font Size 16
  font16: {
    fontSize: RFValue(16),
  },
  font16_1_1: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.1),
  },
  font16_1_15: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.15),
  },
  font16_1_2: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.2),
  },
  font16_1_25: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.25),
  },
  font16_1_3: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.3),
  },
  font16_1_4: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.4),
  },
  font16_1_5: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16 * 1.5),
  },

  // Font Size 17
  font17: {
    fontSize: RFValue(17),
  },
  font17_1_1: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.1),
  },
  font17_1_15: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.15),
  },
  font17_1_2: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.2),
  },
  font17_1_25: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.25),
  },
  font17_1_3: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.3),
  },
  font17_1_4: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.4),
  },
  font17_1_5: {
    fontSize: RFValue(17),
    lineHeight: RFValue(17 * 1.5),
  },

  // Font Size 18
  font18: {
    fontSize: RFValue(18),
  },
  font18_1_1: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.1),
  },
  font18_1_15: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.15),
  },
  font18_1_2: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.2),
  },
  font18_1_25: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.25),
  },
  font18_1_3: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.3),
  },
  font18_1_4: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.4),
  },
  font18_1_5: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18 * 1.5),
  },

  // Font Size 20
  font20: {
    fontSize: RFValue(20),
  },
  font20_1_1: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.1),
  },
  font20_1_15: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.15),
  },
  font20_1_2: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.2),
  },
  font20_1_25: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.25),
  },
  font20_1_3: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.3),
  },
  font20_1_4: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.4),
  },
  font20_1_5: {
    fontSize: RFValue(20),
    lineHeight: RFValue(20 * 1.5),
  },

  // Font Size 22
  font22: {
    fontSize: RFValue(22),
  },
  font22_1_1: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.1),
  },
  font22_1_15: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.15),
  },
  font22_1_2: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.2),
  },
  font22_1_25: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.25),
  },
  font22_1_3: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.3),
  },
  font22_1_4: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.4),
  },
  font22_1_5: {
    fontSize: RFValue(22),
    lineHeight: RFValue(22 * 1.5),
  },

  // Font Size 23
  font23: {
    fontSize: RFValue(23),
  },
  font23_1_1: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.1),
  },
  font23_1_15: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.15),
  },
  font23_1_2: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.2),
  },
  font23_1_25: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.25),
  },
  font23_1_3: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.3),
  },
  font23_1_4: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.4),
  },
  font23_1_5: {
    fontSize: RFValue(23),
    lineHeight: RFValue(23 * 1.5),
  },

  // Font Size 24
  font24: {
    fontSize: RFValue(24),
  },
  font24_1_1: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.1),
  },
  font24_1_15: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.15),
  },
  font24_1_2: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.2),
  },
  font24_1_25: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.25),
  },
  font24_1_3: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.3),
  },
  font24_1_4: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.4),
  },
  font24_1_5: {
    fontSize: RFValue(24),
    lineHeight: RFValue(24 * 1.5),
  },

  // Font Size 26
  font26: {
    fontSize: RFValue(26),
  },
  font26_1_1: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.1),
  },
  font26_1_15: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.15),
  },
  font26_1_2: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.2),
  },
  font26_1_25: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.25),
  },
  font26_1_3: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.3),
  },
  font26_1_4: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.4),
  },
  font26_1_5: {
    fontSize: RFValue(26),
    lineHeight: RFValue(26 * 1.5),
  },

  // Font Size 28
  font28: {
    fontSize: RFValue(28),
  },
  font28_1_1: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.1),
  },
  font28_1_15: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.15),
  },
  font28_1_2: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.2),
  },
  font28_1_25: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.25),
  },
  font28_1_3: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.3),
  },
  font28_1_4: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.4),
  },
  font28_1_5: {
    fontSize: RFValue(28),
    lineHeight: RFValue(28 * 1.5),
  },

  // Font Size 32
  font32: {
    fontSize: RFValue(32),
  },
  font32_1_1: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.1),
  },
  font32_1_15: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.15),
  },
  font32_1_2: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.2),
  },
  font32_1_25: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.25),
  },
  font32_1_3: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.3),
  },
  font32_1_4: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.4),
  },
  font32_1_5: {
    fontSize: RFValue(32),
    lineHeight: RFValue(32 * 1.5),
  },

  // Font Size 36
  font36: {
    fontSize: RFValue(36),
  },
  font36_1_1: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.1),
  },
  font36_1_15: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.15),
  },
  font36_1_2: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.2),
  },
  font36_1_25: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.25),
  },
  font36_1_3: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.3),
  },
  font36_1_4: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.4),
  },
  font36_1_5: {
    fontSize: RFValue(36),
    lineHeight: RFValue(36 * 1.5),
  },

  // Font Size 38
  font38: {
    fontSize: RFValue(38),
  },
  font38_1_1: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.1),
  },
  font38_1_15: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.15),
  },
  font38_1_2: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.2),
  },
  font38_1_25: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.25),
  },
  font38_1_3: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.3),
  },
  font38_1_4: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.4),
  },
  font38_1_5: {
    fontSize: RFValue(38),
    lineHeight: RFValue(38 * 1.5),
  },

  // Font Size 40
  font40: {
    fontSize: RFValue(40),
  },
  font40_1_1: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.1),
  },
  font40_1_15: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.15),
  },
  font40_1_2: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.2),
  },
  font40_1_25: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.25),
  },
  font40_1_3: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.3),
  },
  font40_1_4: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.4),
  },
  font40_1_5: {
    fontSize: RFValue(40),
    lineHeight: RFValue(40 * 1.5),
  },

  // Font Size 44
  font44: {
    fontSize: RFValue(44),
  },
  font44_1_1: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.1),
  },
  font44_1_15: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.15),
  },
  font44_1_2: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.2),
  },
  font44_1_25: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.25),
  },
  font44_1_3: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.3),
  },
  font44_1_4: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.4),
  },
  font44_1_5: {
    fontSize: RFValue(44),
    lineHeight: RFValue(44 * 1.5),
  },

  // Font Size 48
  font48: {
    fontSize: RFValue(48),
  },
  font48_1_1: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.1),
  },
  font48_1_15: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.15),
  },
  font48_1_2: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.2),
  },
  font48_1_25: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.25),
  },
  font48_1_3: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.3),
  },
  font48_1_4: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.4),
  },
  font48_1_5: {
    fontSize: RFValue(48),
    lineHeight: RFValue(48 * 1.5),
  },

  // Font Size 52
  font52: {
    fontSize: RFValue(52),
  },
  font52_1_1: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.1),
  },
  font52_1_15: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.15),
  },
  font52_1_2: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.2),
  },
  font52_1_25: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.25),
  },
  font52_1_3: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.3),
  },
  font52_1_4: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.4),
  },
  font52_1_5: {
    fontSize: RFValue(52),
    lineHeight: RFValue(52 * 1.5),
  },

  // Font Size 56
  font56: {
    fontSize: RFValue(56),
  },
  font56_1_1: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.1),
  },
  font56_1_15: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.15),
  },
  font56_1_2: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.2),
  },
  font56_1_25: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.25),
  },
  font56_1_3: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.3),
  },
  font56_1_4: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.4),
  },
  font56_1_5: {
    fontSize: RFValue(56),
    lineHeight: RFValue(56 * 1.5),
  },

  // Font Size 60
  font60: {
    fontSize: RFValue(60),
  },
  font60_1_1: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.1),
  },
  font60_1_15: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.15),
  },
  font60_1_2: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.2),
  },
  font60_1_25: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.25),
  },
  font60_1_3: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.3),
  },
  font60_1_4: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.4),
  },
  font60_1_5: {
    fontSize: RFValue(60),
    lineHeight: RFValue(60 * 1.5),
  },

  // Font Size 64
  font64: {
    fontSize: RFValue(64),
  },
  font64_1_1: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.1),
  },
  font64_1_15: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.15),
  },
  font64_1_2: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.2),
  },
  font64_1_25: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.25),
  },
  font64_1_3: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.3),
  },
  font64_1_4: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.4),
  },
  font64_1_5: {
    fontSize: RFValue(64),
    lineHeight: RFValue(64 * 1.5),
  },
});

export default globalStyles;
