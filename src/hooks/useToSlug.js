/* eslint no-useless-escape: 0 */
export function useToSlug(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
}
