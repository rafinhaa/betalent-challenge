import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FlatList, SafeAreaView, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import {
  FeedbackCard,
  Header,
  Input,
  Loading,
  Spacer,
  Table,
  Typography,
} from "@/components"
import { useEmployees } from "@/hooks/use-employees"
import "@/locales"
import "@/theme"
import { filterEmployees } from "@/utils/filter-employees"

import RenderEmployeesContent from "./components/render-employees"
import { stylesheet } from "./styles"

export default function Home() {
  const [searchedEmployees, setSearchedEmployees] = useState("")

  const { t } = useTranslation()
  const { styles } = useStyles(stylesheet)
  const { employees, loadingEmployees, errorEmployees, tryAgainEmployees } =
    useEmployees()

  const filteredEmployees = filterEmployees(employees, searchedEmployees)

  const handleClearEmployees = () => {
    setSearchedEmployees("")
  }

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
          renderError={() => (
            <FeedbackCard
              message={t("error")}
              buttonLabel={t("tryAgain")}
              onPress={tryAgainEmployees}
            />
          )}
          renderData={(data) => (
            <FlatList
              data={data}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item: data }) => <Table.Row data={data} />}
              keyExtractor={({ id }) => String(id)}
              ListHeaderComponent={() => <Table.Header />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <FeedbackCard
                  message={t("noEmployees")}
                  buttonLabel={t("clearSearch")}
                  onPress={handleClearEmployees}
                />
              )}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
