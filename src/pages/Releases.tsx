import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const GITHUB_REPO = 'TheophilusNenhanga/crux-lang';

const manualReleaseNotes = {
  'v0.18.0': `## v0.18.0 Release Notes

### Highlights
This release introduces the new slab allocator for improved memory management.

### New Features
- Slab allocator integration for better memory efficiency
- Performance improvements in object allocation

### Bug Fixes
- Fixed root object creation issues
- More performant slab allocator implementation

### Downloads
- **Linux (x64)**: crux-linux-amd64
- **Windows (x64)**: crux-windows-amd64.exe
- **macOS (Intel)**: crux-macos-amd64
- **macOS (Apple Silicon)**: crux-macos-arm64`,
};

function ReleaseCard({ release, isLatest }) {
  const tagName = release.tag_name;
  const manualNotes = manualReleaseNotes[tagName];
  const releaseNotes = manualNotes || release.body || 'No release notes available.';
  const publishedDate = new Date(release.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const linuxAsset = release.assets?.find(a => a.name.includes('linux-amd64'));
  const windowsAsset = release.assets?.find(a => a.name.includes('windows-amd64'));
  const macosIntelAsset = release.assets?.find(a => a.name.includes('macos-amd64'));
  const macosArmAsset = release.assets?.find(a => a.name.includes('macos-arm64'));

  return (
    <div className={styles.releaseCard}>
      <div className={styles.releaseHeader}>
        <h2 className={styles.releaseTitle}>
          {isLatest && <span className={styles.latestBadge}>Latest</span>}
          {release.name || release.tag_name}
        </h2>
        <span className={styles.releaseDate}>{publishedDate}</span>
      </div>
      
      <div className={styles.releaseBody}>
        <div className={styles.releaseNotes}>
          <p>{releaseNotes.split('\n')[0]}</p>
        </div>
        
        <div className={styles.downloads}>
          <h4>Downloads</h4>
          <div className={styles.downloadLinks}>
            {linuxAsset && (
              <Link href={linuxAsset.browser_download_url} className={styles.downloadButton}>
                Linux (x64)
              </Link>
            )}
            {windowsAsset && (
              <Link href={windowsAsset.browser_download_url} className={styles.downloadButton}>
                Windows (x64)
              </Link>
            )}
            {macosIntelAsset && (
              <Link href={macosIntelAsset.browser_download_url} className={styles.downloadButton}>
                macOS (Intel)
              </Link>
            )}
            {macosArmAsset && (
              <Link href={macosArmAsset.browser_download_url} className={styles.downloadButton}>
                macOS (Apple Silicon)
              </Link>
            )}
          </div>
        </div>
        
        <Link href={release.html_url} className={styles.viewOnGithub}>
          View on GitHub →
        </Link>
      </div>
    </div>
  );
}

export default function Releases() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=10`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch releases');
        }
        return res.json();
      })
      .then(data => {
        setReleases(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Releases</h1>
        <p>Loading releases...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h1>Releases</h1>
        <p>Error loading releases: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Crux Releases</h1>
      <p className={styles.description}>
        Download the latest releases of the Crux programming language.
        All releases include binaries for Linux, Windows, and macOS.
      </p>
      
      <div className={styles.releaseList}>
        {releases.map((release, index) => (
          <ReleaseCard 
            key={release.id} 
            release={release} 
            isLatest={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
