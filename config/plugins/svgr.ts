/**
 * Vite plugin to transform SVGs into React components. Uses svgr under the hood.
 *
 * https://github.com/pd4d10/vite-plugin-svgr
 */
import svgr from 'vite-plugin-svgr';

export default function SvgrPlugin() {
  return svgr();
}
