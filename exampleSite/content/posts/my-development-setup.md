---
title: "My Development Setup: Tools and Workflow for 2025"
slug: "my-development-setup"
date: 2024-11-30
tags: ["tools", "productivity", "development", "workflow", "setup"]
excerpt: "A detailed look at my current development environment, including hardware, software, and productivity tools that help me stay efficient."
comments: true
---

After years of tweaking and optimizing, I've settled on a development setup that maximizes both productivity and enjoyment. Here's what I'm using in 2025.

<!--more-->

## Hardware

### Primary Machine

**MacBook Pro 16" (M3 Max)**
- 36GB Unified Memory
- 1TB SSD Storage
- 14-core CPU, 30-core GPU
- Perfect for both development and occasional video editing

### Peripherals

**Monitor**: LG 34WN80C-B 34" Ultrawide
- 3440x1440 resolution
- USB-C connectivity with 60W charging
- Great for side-by-side coding and documentation

**Keyboard**: Keychron K8 Pro (Wireless)
- Gateron G Pro Brown switches
- Hot-swappable keys
- Works seamlessly with macOS

**Mouse**: Logitech MX Master 3S
- Excellent for productivity
- Customizable buttons
- Multi-device support

**Audio**: Sony WH-1000XM5
- Outstanding noise cancellation
- Perfect for focus sessions
- Great for video calls

## Software Stack

### Terminal & Shell

**Terminal**: [Warp](https://www.warp.dev/)
- Modern terminal with AI assistance
- Built-in command completion
- Excellent performance

**Shell**: Zsh with [Oh My Zsh](https://ohmyz.sh/)
```bash
# My .zshrc essentials
plugins=(git docker kubectl golang rust)
theme="powerlevel10k/powerlevel10k"

# Useful aliases
alias ll="ls -la"
alias gs="git status"
alias gp="git push"
alias gc="git commit"
alias k="kubectl"
```

### Code Editor

**Primary**: [Visual Studio Code](https://code.visualstudio.com/)

**Essential Extensions**:
- Rust Analyzer
- Go extension
- GitLens
- Thunder Client (API testing)
- Prettier
- ESLint
- Docker
- Kubernetes

**Settings**:
```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono",
  "editor.lineHeight": 1.6,
  "editor.minimap.enabled": false,
  "workbench.colorTheme": "One Dark Pro",
  "editor.formatOnSave": true
}
```

### Version Control

**Git Configuration**:
```bash
# Global settings
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true

# Useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## Development Tools

### Languages & Runtimes

**Rust**
```bash
# Install via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Essential tools
cargo install cargo-watch
cargo install cargo-edit
cargo install ripgrep
cargo install fd-find
```

**Go**
```bash
# Install via Homebrew
brew install go

# Useful tools
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
go install golang.org/x/tools/cmd/goimports@latest
```

**Node.js**
```bash
# Install via fnm (fast node manager)
curl -fsSL https://fnm.vercel.app/install | bash
fnm install --lts
fnm use lts-latest

# Global packages
npm install -g typescript
npm install -g @vercel/ncc
npm install -g prettier
```

### Containers & Orchestration

**Docker Desktop**
- Essential for local development
- Easy container management
- Kubernetes integration

**kubectl**
```bash
# Install via Homebrew
brew install kubectl

# Useful aliases
alias k="kubectl"
alias kgp="kubectl get pods"
alias kgs="kubectl get services"
alias kgd="kubectl get deployments"
```

### Database Tools

**TablePlus**
- Beautiful database client
- Supports multiple database types
- Great for quick queries and data exploration

**Redis Insight**
- Official Redis GUI
- Perfect for debugging Redis issues
- Real-time monitoring

## Productivity Tools

### Note-Taking & Documentation

**Obsidian**
- Markdown-based notes
- Excellent linking between notes
- Great for technical documentation

**Notion**
- Project planning
- Team collaboration
- Knowledge base

### Communication

**Slack**
- Team communication
- Integration with development tools
- Custom workflows

**Discord**
- Community participation
- Voice channels for pair programming
- Screen sharing

### Utilities

**Rectangle**
- Window management for macOS
- Keyboard shortcuts for window positioning
- Essential for productivity

**CleanMyMac X**
- System maintenance
- Storage optimization
- Malware protection

**1Password**
- Password management
- SSH key management
- Secure note storage

## Workflow

### Daily Routine

1. **Morning Setup** (9:00 AM)
   - Check overnight notifications
   - Review daily goals in Notion
   - Start focus music playlist

2. **Deep Work Blocks** (9:30 AM - 12:00 PM)
   - 90-minute focused coding sessions
   - Phone in Do Not Disturb mode
   - Noise-cancelling headphones on

3. **Lunch & Learning** (12:00 PM - 1:00 PM)
   - Technical articles or documentation
   - YouTube tutorials
   - Podcast listening

4. **Afternoon Collaboration** (1:00 PM - 5:00 PM)
   - Code reviews
   - Team meetings
   - Pair programming sessions

5. **End-of-Day Wrap-up** (5:00 PM - 5:30 PM)
   - Commit and push work
   - Update project notes
   - Plan next day's priorities

### Code Organization

```
~/Development/
├── personal/           # Personal projects
├── work/              # Work-related projects
├── learning/          # Tutorials and experiments
├── tools/             # Custom scripts and utilities
└── archived/          # Completed/deprecated projects
```

### Backup Strategy

1. **Code**: Git repositories on GitHub/GitLab
2. **Documents**: iCloud Drive + Time Machine
3. **System**: Weekly Time Machine backups
4. **Critical Files**: Manual backup to external drive monthly

## Performance Optimizations

### macOS Tweaks

```bash
# Faster key repeat
defaults write NSGlobalDomain KeyRepeat -int 1
defaults write NSGlobalDomain InitialKeyRepeat -int 10

# Show hidden files
defaults write com.apple.finder AppleShowAllFiles YES

# Disable animations
defaults write com.apple.dock launchanim -bool false
defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false
```

### Development Environment

```bash
# Increase file watch limits
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

# Optimize Git performance
git config --global core.preloadindex true
git config --global core.fscache true
git config --global gc.auto 256
```

## Continuous Learning

### Resources I Follow

**Blogs & Newsletters**
- [Hacker News](https://news.ycombinator.com/)
- [Dev.to](https://dev.to/)
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/)

**YouTube Channels**
- [ThePrimeagen](https://www.youtube.com/@ThePrimeagen)
- [Fireship](https://www.youtube.com/@Fireship)
- [TechLead](https://www.youtube.com/@TechLead)

**Podcasts**
- Software Engineering Daily
- The Changelog
- Rust Game Dev Podcast

## Future Improvements

### Planned Upgrades

1. **Monitor**: Considering the Apple Studio Display
2. **Keyboard**: Exploring custom mechanical keyboards
3. **Automation**: More shell scripts for repetitive tasks
4. **AI Tools**: Integrating GitHub Copilot more effectively

### Learning Goals

- **WebAssembly**: Exploring Rust + WASM
- **Kubernetes**: Advanced orchestration patterns
- **Machine Learning**: Practical ML for developers

## Conclusion

This setup has evolved over several years and continues to change as new tools emerge. The key is finding what works for your specific needs and gradually optimizing based on your workflow.

Remember: the best setup is the one that gets out of your way and lets you focus on building great software.

What tools are essential in your development workflow? I'd love to hear about your setup in the comments!
