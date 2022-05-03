import { execaCommand } from 'execa'

/**
 * Reads a given Dhall file using the dhall-to-json CLI tool, returning the
 * resulting JSON object.
 *
 * @param filePath The path to the Dhall file to convert to JSON.
 * @returns A JSON object representing the Dhall file.
 */
export async function readFile(filePath: string) {
  return execaCommand(`dhall-to-json --file ${filePath}`)
}
