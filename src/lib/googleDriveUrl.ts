export function cleanGoogleDriveUrl(url: string): string {
  if (!url) return '';
  url = url.trim();

  let fileId = '';
  const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const openIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const lh3Match = url.match(/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/);
  const ucMatch = url.match(/drive\.google.com\/uc\?export=view&?id=([a-zA-Z0-9_-]+)/);

  if (fileDMatch && fileDMatch[1]) {
    fileId = fileDMatch[1];
  } else if (lh3Match && lh3Match[1]) {
    fileId = lh3Match[1];
  } else if (ucMatch && ucMatch[1]) {
    fileId = ucMatch[1];
  } else if (url.includes('drive.google.com') && openIdMatch && openIdMatch[1]) {
    fileId = openIdMatch[1];
  }

  if (fileId) {
    return `https://drive.google.com/thumbnail?sz=w1000&id=${fileId}`;
  }

  return url;
}

export function resolveIcon(icon: string, color?: string): string {
  if (!icon) return '';
  if (icon.startsWith('http')) {
    return cleanGoogleDriveUrl(icon);
  }
  if (color) {
    return `https://cdn.simpleicons.org/${icon}/${color}`;
  }
  return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`;
}
