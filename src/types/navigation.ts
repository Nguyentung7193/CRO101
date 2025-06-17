export type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
  Demo: undefined;
  Pressable: undefined;
  Lap3b1: undefined;
  Lap2: undefined;
  Lap4: undefined;
  Lap4b2: undefined;
  Lap1: undefined;
  Lap4b3: undefined;
  ScreenHome: undefined;
  Lap8: undefined;
  lap5b1: undefined;
  lap5b2: undefined;
  lap5b3: undefined;
  Lap6b1Screen1: undefined;
  Lap6b1Screen2: {
    message: string;
  };
  SplashScreen: undefined;
  Lap7HomeScreen: undefined;
  Lap7b1: undefined;
  TopTabs: undefined;
  ShoeList: undefined;
  AddShoe: undefined;
  ShoeDetail: { id: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
