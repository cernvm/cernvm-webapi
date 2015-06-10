#!/bin/bash
CONFIG=Release
if [ ! -z "$1" ]; then
	[ "$1" != "Debug" -a "$1" != "Release" ] && echo "Configuration can either be 'Debug' or 'Release'!" && exit 1  
	CONFIG=$1
	shift
fi
BUILDDIR=build_osx_amd64-${CONFIG}
[ ! -d $BUILDDIR ] && mkdir $BUILDDIR
cd $BUILDDIR
cmake .. -DCMAKE_BUILD_TYPE=${CONFIG} -DCRASH_REPORTING=OFF -DLOGGING=OFF -DTARGET_ARCH="x86_64" -DCMAKE_OSX_ARCHITECTURES="x86_64" -G"Xcode" $*
