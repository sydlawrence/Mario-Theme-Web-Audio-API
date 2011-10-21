// Adapted from http://tonalsoft.com/pub/news/pitch-bend.aspx

var midi = { 
  0: {
    frequency: 8.1757989156
  },
  1: {
    frequency: 8.6619572180
  },
  2: {
    frequency: 9.1770239974
  },
  3: {
    frequency: 10.3008611535
  },
  4: {
    frequency: 10.3008611535
  },
  5: {
    frequency: 10.9133822323
  },
  6: {
    frequency: 11.5623257097
  },
  7: {
    frequency: 12.2498573744
  },
  8: {
    frequency: 12.9782717994
  },
  9: {
    frequency: 13.7500000000
  },
  10: {
    frequency: 14.5676175474
  },
  11: {
    frequency: 15.4338531643
  },
  12: {
    frequency: 16.3515978313
  },
  13: {
    frequency: 17.3239144361
  },
  14: {
    frequency: 18.3540479948
  },
  15: {
    frequency: 19.4454364826
  },
  16: {
    frequency: 20.6017223071
  },
  17: {
    frequency: 21.8267644646
  },
  18: {
    frequency: 23.1246514195
  },
  19: {
    frequency: 24.4997147489
  },
  20: {
    frequency: 25.9565435987
  },
  21: {
    frequency: 27.5000000000
  },
  22: {
    frequency: 29.1352350949
  },
  23: {
    frequency: 30.8677063285
  },
  24: {
    frequency: 32.7031956626
  },
  25: {
    frequency: 34.6478288721
  },
  26: {
    frequency: 36.7080959897
  },
  27: {
    frequency: 38.8908729653
  },
  28: {
    frequency: 41.2034446141
  },
  29: {
    frequency: 43.6535289291
  },
  30: {
    frequency: 46.2493028390
  },
  31: {
    frequency: 48.9994294977
  },
  32: {
    frequency: 51.9130871975
  },
  33: {
    frequency: 55.0000000000
  },
  34: {
    frequency: 58.2704701898
  },
  35: {
    frequency: 61.7354126570
  },
  36: {
    frequency: 65.4063913251
  },
  37: {
    frequency: 69.2956577442
  },
  38: {
    frequency: 73.4161919794
  },
  39: {
    frequency: 77.7817459305
  },
  40: {
    frequency: 82.4068892282
  },
  41: {
    frequency: 87.3070578583
  },
  42: {
    frequency: 92.4986056779
  },
  43: {
    frequency: 97.9988589954
  },
  44: {
    frequency: 103.8261743950
  },
  45: {
    frequency: 110.0000000000
  },
  46: {
    frequency: 116.5409403795
  },
  47: {
    frequency: 123.4708253140
  },
  48: {
    frequency: 130.8127826503
  },
  49: {
    frequency: 138.5913154884
  },
  50: {
    frequency: 146.8323839587
  },
  51: {
    frequency: 155.5634918610
  },
  52: {
    frequency: 164.8137784564
  },
  53: {
    frequency: 174.6141157165
  },
  54: {
    frequency: 184.9972113558
  },
  55: {
    frequency: 195.9977179909
  },
  56: {
    frequency: 207.6523487900
  },
  57: {
    frequency: 220.0000000000
  },
  58: {
    frequency: 233.0818807590
  },
  59: {
    frequency: 246.9416506281
  },
  60: {
    frequency: 261.6255653006
  },
  61: {
    frequency: 277.1826309769
  },
  62: {
    frequency: 293.6647679174
  },
  63: {
    frequency: 311.1269837221
  },
  64: {
    frequency: 329.6275569129
  },
  65: {
    frequency: 349.2282314330
  },
  66: {
    frequency: 369.9944227116
  },
  67: {
    frequency: 391.9954359817
  },
  68: {
    frequency: 415.3046975799
  },
  69: {
    frequency: 440.0000000000
  },
  70: {
    frequency: 466.1637615181
  },
  71: {
    frequency: 493.8833012561
  },
  72: {
    frequency: 523.2511306012
  },
  73: {
    frequency: 554.3652619537
  },
  74: {
    frequency: 587.3295358348
  },
  75: {
    frequency: 622.2539674442
  },
  76: {
    frequency: 659.2551138257
  },
  77: {
    frequency: 698.4564628660
  },
  78: {
    frequency: 739.9888454233
  },
  79: {
    frequency: 783.9908719635
  },
  80: {
    frequency: 830.6093951599
  },
  81: {
    frequency: 880.0000000000
  },
  82: {
    frequency: 932.3275230362
  },
  83: {
    frequency: 987.7666025122
  },
  84: {
    frequency: 1,046.5022612024
  },
  85: {
    frequency: 1,108.7305239075
  },
  86: {
    frequency: 1,174.6590716696
  },
  87: {
    frequency: 1,244.5079348883
  },
  88: {
    frequency: 1,318.5102276515
  },
  89: {
    frequency: 1,396.9129257320
  },
  90: {
    frequency: 1,479.9776908465
  },
  91: {
    frequency: 1,567.9817439270
  },
  92: {
    frequency: 1,661.2187903198
  },
  93: {
    frequency: 1,760.0000000000
  },
  94: {
    frequency: 1,864.6550460724
  },
  95: {
    frequency: 1,975.5332050245
  },
  96: {
    frequency: 2,093.0045224048
  },
  97: {
    frequency: 2,217.4610478150
  },
  98: {
    frequency: 2,349.3181433393
  },
  99: {
    frequency: 2,489.0158697766
  },
  100: {
    frequency: 2,637.0204553030
  },
  101: {
    frequency: 2,793.8258514640
  },
  102: {
    frequency: 2,959.9553816931
  },
  103: {
    frequency: 3,135.9634878540
  },
  104: {
    frequency: 3,322.4375806396
  },
  105: {
    frequency: 3,520.0000000000
  },
  106: {
    frequency: 3,729.3100921447
  },
  107: {
    frequency: 3,951.0664100490
  },
  108: {
    frequency: 4,186.0090448096
  },
  109: {
    frequency: 4,434.9220956300
  },
  110: {
    frequency: 4,698.6362866785
  },
  111: {
    frequency: 4,978.0317395533
  },
  112: {
    frequency: 5,274.0409106059
  },
  113: {
    frequency: 5,587.6517029281
  },
  114: {
    frequency: 5,919.9107633862
  },
  115: {
    frequency: 5,919.9107633862
  },
  116: {
    frequency: 6,644.8751612791
  },
  117: {
    frequency: 7,040.0000000000
  },
  118: {
    frequency: 7,458.6201842894
  },
  119: {
    frequency: 7,902.1328200980
  },
  120: {
    frequency: 8,372.0180896192
  },
  121: {
    frequency: 8,869.8441912599
  },
  122: {
    frequency: 9,397.2725733570
  },
  123: {
    frequency: 9,956.0634791066
  },
  124: {
    frequency: 10,548.0818212118
  },
  125: {
    frequency: 11,175.3034058561
  },
  126: {
    frequency: 11,839.8215267723
  },
  127: {
    frequency: 12,543.8539514160
  }
};