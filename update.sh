./remove.sh
find . -name .DS_Store
find . -name .DS_Store -delete
echo "**.DS_Store files deleted**"
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch
find . -name '*.DS_Store' -type f -delete
echo ".DS_Store" >> ~/.gitignore_global
echo "._.DS_Store" >> ~/.gitignore_global
echo "**/.DS_Store" >> ~/.gitignore_global
echo "**/._.DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global

./packages.sh

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
