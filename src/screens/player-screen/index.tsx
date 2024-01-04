import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native-windows';
import Video from "react-native-video";
import VideoMP4 from "../../assets/Mandalorian.mp4";
import { Page } from '../../components/page';
import { Seekbar } from "./components/seekbar";
import { window } from "react-native-custom-window";

const uri = "https://rr1---sn-gpv7yn7e.googlevideo.com/videoplayback?expire=1704352763&ei=mweWZYmBJ7eWsfIPhaavoA4&ip=84.17.45.8&id=o-ADJzuCojlTPeJ1cq4Jv3ooSKzrr4xnKQRo3VEl9HtGVw&itag=303&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f9KUti9x4Vf3Ltx8YkF1Rwc60AE&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=168738483&dur=634.566&lmt=1698719132998425&keepalive=yes&fexp=24007246&c=ANDROID&txp=5537434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgFX2Mg5o3eKSTkzta-rmpJzl3iRtxe7Y_JyN4lHFGooUCIAtTQPY0nDVCvXH_x6xfgGgdTz4JyxN_JmCtdIREbrU5&rm=sn-a5meed7s&req_id=bf64e494c866a3ee&redirect_counter=2&cm2rm=sn-cgpn5oxu-uixe7l&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=aP&mip=2804:29b8:51af:668:49a3:7b3d:f788:a65c&mm=29&mn=sn-gpv7yn7e&ms=rdu&mt=1704331007&mv=m&mvi=1&pl=48&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgUH1pgPkOP4RkJsaNyz_e_1bojqmPAoe0V0o4cCn-fRUCIFLJ3aZ0MvlnFC9z29Xd507cCZkycDaSDuWJOdAUDoBa";

export function PlayerScreen({ navigation }: any) {
  const [playing, setPlaying] = useState(false);
  const [fullscreen,setFullscreen] = useState(false);
  const [controls,setControls] = useState(false);
  const [videoInfo, setVideoInfo] = useState({ duration: 0, progress: 0 });

  const viewRef = useRef<View>(null);

  const onLoad = useCallback((e: any) => {
    console.log(e.nativeEvent.duration)
    setVideoInfo(prevState => ({ ...prevState, duration: e.nativeEvent.duration }));
  }, [videoInfo.duration]);

  const onEnd = useCallback(() => {
    console.log("Video ended");
  }, []);

  const onProgress = (e: any) => {
    setVideoInfo({ ...videoInfo, progress: e.nativeEvent.currentTime });
  }

  const handlerFullscreen = async () => {
    await setFullscreen(!fullscreen);
    await setControls(false);
    // await window.fullscreen()
  }

  const handlerPauseAndPlay = useCallback(() => {
    setPlaying(prevState => !prevState);
  }, []);

  return (
    <Page titlebar>
      <Video
        source={{ uri }}
        onLoad={onLoad}
        onEnd={onEnd}
        fullscreen={fullscreen}
        onProgress={onProgress}
        controls={controls}
        paused={!playing}
        style={styles.video}
      />
      <View style={styles.controls} ref={viewRef} focusable>
        <Text>Mandalarian</Text>
        <Pressable onPress={handlerPauseAndPlay}>
          <Text style={styles.textInfo}>{playing ? "Pause" : "Play"}</Text>
        </Pressable>
        <Pressable onPress={handlerFullscreen}>
          <Text style={styles.textInfo}>{fullscreen ? "leave fullscreen" : "enter fullscreen"}</Text>
        </Pressable>
        <Text>Progress: {videoInfo.progress}</Text>
        <Text>Duration: {videoInfo.duration}</Text>

        <Seekbar duration={videoInfo.duration} progress={videoInfo.progress} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  controls: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  textInfo:{
    color: "#00E676",
  }
});
