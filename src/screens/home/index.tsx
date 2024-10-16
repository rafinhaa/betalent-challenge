import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FlatList, SafeAreaView, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { Header, Input, Loading, Spacer, Table, Typography } from "@/components"
import { useEmployees } from "@/hooks/use-employees"
import "@/locales"
import "@/theme"
import { filterEmployees } from "@/utils/filter-employees"

import RenderEmployeesContent from "./components/render-employees"
import TryAgain from "./components/try-again"
import { stylesheet } from "./styles"

export default function Home() {
  const [searchedEmployees, setSearchedEmployees] = useState("")

  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)
  const { employees, loadingEmployees, errorEmployees, tryAgainEmployees } =
    useEmployees()

  const filteredEmployees = filterEmployees(employees, searchedEmployees)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <Spacer size={24} />

        <Typography heading="h1">{t("employees")}</Typography>
        <Spacer size={16} />

        <Input value={searchedEmployees} onChangeText={setSearchedEmployees} />
        <Spacer size={24} />

        <RenderEmployeesContent
          loading={loadingEmployees}
          error={errorEmployees}
          data={filteredEmployees}
          renderLoading={() => <Loading />}
          renderError={() => <TryAgain onPress={tryAgainEmployees} />}
          renderData={(data) => (
            <FlatList
              data={data}
              renderItem={({ item: data }) => <Table.Row data={data} />}
              keyExtractor={({ id }) => String(id)}
              ListHeaderComponent={() => <Table.Header />}
              showsVerticalScrollIndicator={false}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
