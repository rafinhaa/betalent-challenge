import { Inter_700Bold } from "@expo-google-fonts/inter"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"

import { ApiProvider } from "@/context/api"
import "@/locales"
import Home from "@/screens/home"
import { api } from "@/services/api"
import "@/theme"

export default function App() {
  const [loaded] = useFonts({
    "Helvetica-Regular": require("./assets/fonts/HelveticaNeueRegular.otf"),
    "Helvetica-Medium": require("./assets/fonts/HelveticaNeueMedium.otf"),
    Inter_700Bold,
  })

  if (!loaded) return

  return (
    <ApiProvider api={api}>
      <StatusBar style="auto" />

      <Home />
    </ApiProvider>
  )
}
