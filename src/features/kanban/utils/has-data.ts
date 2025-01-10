export function hasData<T>(data: Array<T> | undefined | null): boolean {
  return data?.length === 0;
}
