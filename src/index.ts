import { execaCommand, ExecaReturnValue } from 'execa'
import { existsSync } from 'fs-extra'

/**
 * Reads a given Dhall file using the dhall-to-json CLI tool, returning the
 * resulting JSON object.
 *
 * @param filePath The path to the Dhall file to convert to JSON.
 * @returns A JSON object representing the Dhall file.
 */
export async function readFile(filePath: string): Promise<string | ExecaReturnValue> {
  if (existsSync(filePath)) {
    const res = await execaCommand(`dhall-to-json --file ${filePath}`)

    if (res.exitCode === 0) return JSON.parse(res.stdout)
    else return res
  } else {
    throw new Error(`File not found: ${filePath}`)
  }
}
