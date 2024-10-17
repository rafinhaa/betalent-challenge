type RenderOptions<T> = {
  loading: boolean
  error: boolean
  data: T[] | undefined
}

export type RenderEmployeesProps<T> = {
  options: RenderOptions<T>
  renderData: (data: T[]) => JSX.Element
  renderLoading?: () => JSX.Element
  renderError?: () => JSX.Element
}

const RenderEmployeesContent = <T,>({
  options: { loading, error, data },
  renderData,
  renderLoading,
  renderError,
}: RenderEmployeesProps<T>) => {
  if (loading) {
    return renderLoading?.()
  }

  if (error) {
    return renderError?.()
  }

  return data && renderData(data)
}

export default RenderEmployeesContent
