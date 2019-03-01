./remove.sh
./packages.sh

dpkg-scanpackages -m . /dev/null >Packages
bzip2 Packages
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch
echo ".DS_Store" >> ~/.gitignore_global
echo "._.DS_Store" >> ~/.gitignore_global
echo "**/.DS_Store" >> ~/.gitignore_global
echo "**/._.DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global