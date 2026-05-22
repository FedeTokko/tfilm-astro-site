const assetBase = "/assets";

export const assetFolders = {
  global: `${assetBase}/00_GLOBAL`,
  inmf: `${assetBase}/INMF`,
  isacco: `${assetBase}/ISACCO`,
  lacd: `${assetBase}/LACD`,
  newProjects: `${assetBase}/NEW_PROJECTS`,
  proserpina: `${assetBase}/PROSERPINA`,
} as const;

export function assetPath(folder: keyof typeof assetFolders, filePath: string) {
  return `${assetFolders[folder]}/${filePath.replace(/^\/+/, "")}`;
}
